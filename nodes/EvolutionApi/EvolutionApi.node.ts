import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeApiError,
} from 'n8n-workflow';
import { evolutionNodeProperties } from './properties';
import { resourceOperationsFunctions } from './execute';

export class EvolutionApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Evolution API',
		name: 'evolutionApi',
		icon: 'file:evolutionapi.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description: 'Interact with Evolution API',
		defaults: {
			name: 'Evolution API',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'evolutionApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://doc.evolution-api.com/api-reference',
			url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		// The structure of the node's properties:
		// • Resources: Available resources (Instance, Messages, Events, Integrations)
		// • Operations: Operations of each resource (Ex: Create instance, Send message, Define Webhook)
		// • Fields: Fields of each operation
		properties: evolutionNodeProperties,
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;

		// Searches for the function for the selected resource and operation
		const fn = resourceOperationsFunctions[resource][operation];

		// If the function is not found, returns an error
		if (!fn) {
			throw new NodeApiError(this.getNode(), {
				message: 'Operation not supported.',
				description: `The function "${operation}" for the resource "${resource}" is not supported!`,
			});
		}

		// Executes the function
		const responseData = await fn(this);

		// Return only the JSON
		return [this.helpers.returnJsonArray(responseData)];
	}
}

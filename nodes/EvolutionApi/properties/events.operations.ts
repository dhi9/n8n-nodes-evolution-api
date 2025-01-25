import { INodeProperties } from 'n8n-workflow';

// Events API Options
export const eventsOperationsOptions: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['events-api'], // Resource Value
		},
	},
	options: [
		// Option = Webhook
		{
			// Set/find Webhook
			name: 'Webhook',
			action: 'Webhook',
			description: 'Define/Find Webhook integration',
			value: 'webhook',
		},
		{
			// Set/find RabbitMQ
			name: 'RabbitMQ',
			action: 'Rabbitmq',
			description: 'Define/Find RabbitMQ integration',
			value: 'rabbitmq',
		},
	],
	// Setting webhook as default option
	default: 'webhook',
};

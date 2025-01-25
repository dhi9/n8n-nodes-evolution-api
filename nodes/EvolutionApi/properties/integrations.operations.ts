import { INodeProperties } from 'n8n-workflow';

// Integrations-api options (Integration)
export const integrationsOperationsOptions: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['integrations-api'], // Resource Value
		},
	},
	options: [
		{
			// Set/find Chatwoot
			name: 'Chatwoot',
			action: 'Chatwoot',
			description: 'Set/Search integration with Chatwoot',
			value: 'chatwoot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions from Evolution Bot
			name: 'Evolution Bot',
			action: 'Evolution bot',
			description: 'Controls the integration with Evolution Bot',
			value: 'evolution-bot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions from Typebot
			name: 'Typebot',
			action: 'Typebot',
			description: 'Controls the integration with Typebot',
			value: 'typebot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions from Dify
			name: 'Dify',
			action: 'Dify',
			description: 'Controls the integration with Dify',
			value: 'difyBot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions from Dify
			name: 'Flowise',
			action: 'Flowise',
			description: 'Controls the integration with Flowise',
			value: 'flowiseBot',
		},
	],
	// Setting the "Send Text" option as default
	default: 'chatwoot',
};

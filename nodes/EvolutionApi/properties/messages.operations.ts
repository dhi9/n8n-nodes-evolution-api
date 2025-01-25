import { INodeProperties } from 'n8n-workflow';

// Options for the messages-api (Messages)
export const messagesOperationsOptions: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['messages-api'], // Resource Value
		},
	},
	options: [
		// Option = Send Text Message
		{
			// Send Text
			name: 'Send Text',
			action: 'Send text',
			description: 'Sends a Text message',
			value: 'send-text',
		},

		// Option = Send Image
		{
			// Send Media
			name: 'Send Image',
			action: 'Send image',
			description: 'Sends an Image message',
			value: 'send-image',
		},

		// Option = Send Video
		{
			// Send Media
			name: 'Send Video',
			action: 'Send video',
			description: 'Send Video message',
			value: 'send-video',
		},

		// Option = Send Audio
		{
			// Send Narrated Audio
			name: 'Send Audio',
			action: 'Send audio',
			description: 'Send Audio message',
			value: 'send-audio',
		},

		// Option = Send Document
		{
			// Send Media
			name: 'Send Document',
			action: 'Send document',
			description: 'Send Video message',
			value: 'send-document',
		},

		// Option = Send Poll
		{
			// Send Poll
			name: 'Send Poll',
			action: 'Send poll',
			description: 'Sends a Poll with up to 12 options',
			value: 'send-poll',
		},

		// Option = Send Contact
		{
			name: 'Send Contact',
			action: 'Send contact',
			description: 'Sends a contact on WhatsApp',
			value: 'send-contact',
		},

		// Option = Send List
		{
			name: 'Send List',
			action: 'Send list',
			description: 'Sends an interactive list of options',
			value: 'send-list',
		},

		// Option = Send Buttons
		{
			name: 'Send Buttons',
			action: 'Send buttons',
			description: 'Sends a message with interactive buttons',
			value: 'send-buttons',
		},

		// Option = Send PIX
		{
			name: 'Send PIX',
			action: 'Send PIX',
			description: 'Sends a PIX payment button',
			value: 'send-pix',
		},

		// Option = Send Status
		{
			name: 'Send Status',
			action: 'Send status',
			description: 'Publish a Status/Stories',
			value: 'send-stories',
		},

		// Option = React Message
		{
			name: 'React Message',
			action: 'React message',
			description: 'Adds a reaction to a message',
			value: 'send-reaction',
		},
	],
	// Setting the "Send Text" option as default
	default: 'send-text',
};

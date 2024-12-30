import { INodeProperties } from 'n8n-workflow';
import { eventsFields as eventsFields } from './events.fields';
import { instancesFields } from './instances.fields';
import { integrationsFields as integrationsFields } from './integrations.fields';
import { messagesFields as messagesFields } from './messages.fields';
import { eventsOperationsOptions } from './events.operations';
import { instancesOperationsOptions } from './instances.operations';
import { integrationsOperationsOptions } from './integrations.operations';
import { messagesOperationsOptions } from './messages.operations';
import { groupsFields } from './groups.fields';
import { groupsOperations } from './groups.operations';

const resourcesOptions: INodeProperties = {
	displayName: 'Recurso',
	name: 'resource',
	type: 'options',
	noDataExpression: true,
	options: [
		{
			name: 'Instancia',
			value: 'instances-api',
		},
		{
			name: 'Mensagem',
			value: 'messages-api',
		},
		{
			name: 'Grupos',
			value: 'groups-api',
		},
		{
			name: 'Evento',
			value: 'events-api',
		},
		{
			name: 'Integração',
			value: 'integrations-api',
		},
	],
	default: 'instances-api',
};

export const evolutionNodeProperties = [
	resourcesOptions,
	// Funções disponíveis quando selecionado o recurso "Instancias"
	instancesOperationsOptions,
	// Funções disponíveis quando selecionado o recurso "Mensagens"
	messagesOperationsOptions,
	// Funções disponíveis quando selecionado o recurso "Grupos"
	groupsOperations,
	// Funções disponíveis quando selecionado o recurso "Eventos"
	eventsOperationsOptions,
	// Funções disponíveis quando selecionado o recurso "Integrações"
	integrationsOperationsOptions,
	// Campos disponíveis quando selecionado o recurso e alguma operação
	...instancesFields,
	...messagesFields,
	...groupsFields,
	...eventsFields,
	...integrationsFields,
];

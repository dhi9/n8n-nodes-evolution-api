import { INodeProperties } from 'n8n-workflow';

export const profileOperationsOptions: INodeProperties = {
    displayName: 'Operação',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
        show: {
            resource: ['profile-api'],
        },
    },
    options: [
        {
            name: 'Buscar Perfil',
            value: 'fetch-profile',
            description: 'Busca informações do perfil',
            action: 'Buscar perfil',
        },
        {
            name: 'Buscar Perfil Profissional',
            value: 'fetch-business-profile',
            description: 'Busca informações do perfil profissional',
            action: 'Buscar perfil profissional',
        },
        {
            name: 'Update Profile Name',
            value: 'update-profile-name',
            description: 'Updates the profile name',
            action: 'Update profile name',
        },
        {
            name: 'Update Status',
            value: 'update-profile-status',
            description: 'Updates the profile status',
            action: 'Update profile status',
        },
        {
            name: 'Update Profile Picture',
            value: 'update-profile-picture',
            description: 'Updates the profile picture',
            action: 'Update profile picture',
        },
        {
            name: 'Remove Profile Picture',
            value: 'remove-profile-picture',
            description: 'Removes the profile picture',
            action: 'Remove profile picture',
        },
        {
            name: 'Fetch Privacy Settings',
            value: 'fetch-privacy-settings',
            description: 'Fetches the instance privacy settings',
            action: 'Fetch privacy settings',
        },
        {
            name: 'Update Privacy Settings',
            value: 'update-privacy-settings',
            description: 'Updates the instance privacy settings',
            action: 'Update privacy settings',
        },
    ],
    default: 'fetch-profile',
};

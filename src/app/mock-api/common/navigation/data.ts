/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example Default',
        subtitle: 'Subtitle',
        type : 'basic',
        icon : 'heroicons_solid:chart-pie',
        link : '/example'
    },
    {
        type : 'divider',
    },
    {
        id   : 'inventario',
        title: 'Inventario',
        type : 'collapsable',
        icon : 'heroicons_solid:server',
        children: [
            {
                id   : 'inventario1',
                title: 'Inventario 1',
                type : 'basic',
                icon : 'heroicons_solid:server',
            },
            {
                id   : 'inventario2',
                title: 'Inventario 2',
                type : 'basic',
                icon : 'heroicons_solid:server',
            },
        ]
    },
    {
        id   : 'aplicacion',
        title: 'Aplicacion',
        type : 'basic',
        icon : 'apps',
    },
    {
        id   : 'administracionUsuarios',
        title: 'Administracion de Usuarios',
        type : 'basic',
        icon : 'heroicons_solid:user-group',
        link : '/administracionUsuarios'
    },
    {
        id   : 'solicitudesMonitoreo',
        title: 'Solicitudes de Monitoreo',
        type : 'collapsable',
        icon : 'feather:book',
        children: [
            {
                id   : 'solicitudesMonitoreo1',
                title: 'solicitudesMonitoreo1 1',
                type : 'basic',
                icon : 'feather:book',
            },
            {
                id   : 'solicitudesMonitoreo2',
                title: 'solicitudesMonitoreo1 2',
                type : 'basic',
                icon : 'feather:book',
            },
        ]
    },
    {
        id   : 'catalogos',
        title: 'Catalogos',
        type : 'collapsable',
        icon : 'mat_solid:library_books',
        children: [
            {
                id   : 'catalogos1',
                title: 'catalogos 1',
                type : 'basic',
                icon : 'mat_solid:library_books',
            },
            {
                id   : 'catalogos2',
                title: 'catalogos 2',
                type : 'basic',
                icon : 'mat_solid:library_books',
            },
        ]
    },
    {
        id   : 'manual',
        title: 'Manual',
        type : 'basic',
        icon : 'mat_solid:menu_book',
        link : '/manual'
    },

];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example compact',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example Futuristic',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example horizontal',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];

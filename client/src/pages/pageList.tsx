import MenuIcon from '@mui/icons-material/Menu';
import ShopIcon from '@mui/icons-material/Shop';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SummarizeIcon from '@mui/icons-material/Summarize';
import EditRoadIcon from '@mui/icons-material/EditRoad';
import { Home } from './Home';
import { NuevoProducto } from './NuevoProducto';
import { Venta } from './Venta';
import { NuevoCliente } from './NuevoCliente';
import { EditarCliente } from './EditarCliente';
import { EditarProducto } from './EditarProducto';

export type PageItem = {
    pageName: string, pageDescription: string, url: string, getIcon: (props?: any) => any, getPageComponent: (props?: any) => any
}

const iconprops = {
    sx: { width: '100%', height: '100%' }
}

export const pageList: { [key: string]: PageItem; } = {
    // export const pageList: Array< PageItem> = [
    menuPrincipal: 
    {
        pageName: "Menu Principal",
        pageDescription: "Muestra lo que puedes realizar con el sistema",
        url: "/",
        getIcon: () => (<SummarizeIcon {...iconprops} />),
        getPageComponent:()=><Home/>
    },
    nuevoProducto: 
    {
        pageName: "Nuevo Producto",
        pageDescription: "Agregar la descripcion de un nuevo producto, a demas de precio y otros.",
        url: "/nuevoproducto",
        getIcon: () => (<AddCircleIcon {...iconprops} />),
        getPageComponent:()=><NuevoProducto/>
    },
    nuevoCliente: 
    {
        pageName: "Nuevo Cliente",
        pageDescription: "Ingresa un comprador conocido a la lista",
        url: "/nuevocliente",
        getIcon: () => (<PersonAddAlt1Icon {...iconprops} />),
        getPageComponent:()=><NuevoCliente/>
    },
    venta: 
    {
        pageName: "Venta",
        pageDescription: "Vender un producto disponioble en inventario",
        url: "/venta",
        getIcon: () => (<ShopIcon {...iconprops} />),
        getPageComponent:()=><Venta/>
    },
    editarCliente: 
    {
        pageName: "Editar Cliente",
        pageDescription: "Cambiar datos de una persona existente ",
        url: "/editarcliente",
        getIcon: () => (<PersonSearchIcon {...iconprops} />),
        getPageComponent:()=><EditarCliente/>
    },
    editarProducto: 
    {
        pageName: "Editar Producto",
        pageDescription: "Cambiar precios y otras propiedades de un producto",
        url: "/editarproducto",
        getIcon: () => (<EditRoadIcon {...iconprops} />),
        getPageComponent:()=><EditarProducto/>
    },
//]
}


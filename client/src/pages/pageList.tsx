import MenuIcon from '@mui/icons-material/Menu';
import ShopIcon from '@mui/icons-material/Shop';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SummarizeIcon from '@mui/icons-material/Summarize';
import EditRoadIcon from '@mui/icons-material/EditRoad';

export type PageItem = {
    pageName: string, pageDescription: string, url: string, getIcon: (props?:any)=>any
}

const iconprops={
     sx:{width:'100%', height:'100%'}
}

export const pageList: Array<PageItem> = [
    { pageName: "Menu Principal",pageDescription:"Muestra lo que puedes realizar con el sistema", url: "#", getIcon: ()=>(<SummarizeIcon {...iconprops} /> )},
    { pageName: "Nuevo Producto",pageDescription:"Agregar la descripcion de un nuevo producto, a demas de precio y otros.", url: "#", getIcon: ()=>(<AddCircleIcon {...iconprops} /> )},
    { pageName: "Nuevo Cliente",pageDescription:"Ingresa un comprador conocido a la lista", url: "#",getIcon: ()=>(<PersonAddAlt1Icon {...iconprops} /> )},
    { pageName: "Venta", pageDescription:"Vender un producto disponioble en inventario",  url: "#", getIcon: ()=>(<ShopIcon {...iconprops}/>)},
    { pageName: "Editar Cliente", pageDescription:"Cambiar datos de una persona existente ",  url: "#", getIcon: ()=>(<PersonSearchIcon {...iconprops}/>)},
    { pageName: "Editar Producto", pageDescription:"Cambiar precios y otras propiedades de un producto",  url: "#", getIcon: ()=>(<EditRoadIcon {...iconprops}/>)},
    
]



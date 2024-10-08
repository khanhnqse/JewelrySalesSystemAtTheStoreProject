import {
  ApartmentOutlined,
  CloseCircleOutlined,
  DashboardOutlined,
  EditOutlined,
  FolderViewOutlined,
  MoneyCollectOutlined,
  PercentageOutlined,
  ProductOutlined,
  ShopOutlined,
  SyncOutlined,
  UserOutlined,
  WalletFilled,
  EyeOutlined
} from '@ant-design/icons';
import { PATHS } from './path';
import Popup from '@/components/Popup/Popup';
import DeleteUser from '@/components/DeleteUser/DeleteUser';
import UpdateUser from '@/components/UpdateUser/UpdateUser';
import DeleteCustomer from '@/components/DeleteCustomer/DeleteCustomer';
import UpdateCustomer from '@/components/UpdateCustomer/UpdateCustomer';
import ResetPassword from '@/components/ResetUserPassword/ResetPassword';
import DeleteCounter from '@/components/DeleteCounter/DeleteCounter';
import UpdateCounter from '@/components/UpdateCounter/UpdateCounter';
import UpdateProduct from '@/components/UpdateProduct/UpdateProduct';
import DeleteProduct from '@/components/DeleteProduct/DeleteProduct';
import UpdateTypePrices from '@/components/UpdateTypePrices/UpdateTypePrices';
import DeleteTypePrice from '@/components/DeleteTypePrice/DeleteTypePrice';
import ProductDetailPage from '@/pages/ProductDetailPage/ProductDetailPage';
import { Link } from 'react-router-dom';
import UpdateOrder from '@/components/UpdateOrder/UpdateOrder';
import DeleteOrder from '@/components/DeleteOrder/DeleteOrder';
import DeletePromotion from '@/components/DeletePromotion/DeletePromotion';
// Navigation Sider
export const MenuItems = [
  {
    label: 'Dashboard',
    key: PATHS.HOME,
    icon: <DashboardOutlined />,
  },
  {
    label: 'Product',
    key: PATHS.PRODUCT.INDEX,
    icon: <ProductOutlined />,
  },
  {
    label: 'Gold Price',
    key: PATHS.GOLD_PRICE.INDEX,
    icon: <MoneyCollectOutlined />,
  },
  {
    label: 'Order',
    key: 'order',
    icon: <ShopOutlined />,
  },
  {
    label: 'Customer',
    key: PATHS.CUSTOMER.INDEX,
    icon: <UserOutlined />,
  },
  {
    label: 'User management',
    key: PATHS.USER.INDEX,
    icon: <ApartmentOutlined />,
  },
  {
    label: 'Counter',
    key: 'counter',
    icon: <WalletFilled />,
  },
  {
    label: 'Type Prices',
    key: 'type-prices',
    icon: <MoneyCollectOutlined />,
  },
  {
    label: 'Promotion',
    key: 'promotion',
    icon: <PercentageOutlined />,
  },
];

export const ViewUserOptionDropdown = (id, name) => [
  {
    label: <Link to={PATHS.USER.INDEX + '/' + id}>View detail</Link>,
    key: 'view_detail',
    icon: <FolderViewOutlined />,
  },
  {
    label: (
      <Popup title="Update User" content={<UpdateUser id={id} />}>
        Update User
      </Popup>
    ),
    key: 'edit',
    icon: <EditOutlined />,
  },
  {
    label: (
      <Popup title="Delete User" content={<DeleteUser id={id} name={name} />}>
        Delete User
      </Popup>
    ),
    key: 'delete',
    icon: <CloseCircleOutlined />,
  },
  {
    label: (
      <Popup title="Reset Password" content={<ResetPassword id={id} />}>
        Reset Password
      </Popup>
    ),
    key: 'reset',
    icon: <SyncOutlined />,
  },
];
export const ViewCustomerOptionDropdown = (id, name) => [
  {
    label: (
      <Popup
        title="Update Customer"
        content={<UpdateCustomer id={id} name={name} />}
      >
        Update Customer
      </Popup>
    ),
    key: 'edit',
    icon: <EditOutlined />,
  },
  {
    label: (
      <Popup
        title="Delete Customer"
        content={<DeleteCustomer id={id} name={name} />}
      >
        Delete Customer
      </Popup>
    ),
    key: 'delete',
    icon: <CloseCircleOutlined />,
  },
];
export const ViewCounterOptionDropdown = (id, name) => [
  {
    label: (
      <Popup
        title="Update Counter"
        content={<UpdateCounter id={id} name={name} />}
      >
        Update Counter
      </Popup>
    ),
    key: 'edit',
    icon: <EditOutlined />,
  },
  {
    label: (
      <Popup
        title="Delete Counter"
        content={<DeleteCounter id={id} name={name} />}
      >
        Delete Counter
      </Popup>
    ),
    key: 'delete',
    icon: <CloseCircleOutlined />,
  },
];

export const ViewProductOptionDropdown = (id, product_name) => [
  {
    label: <Link to={PATHS.PRODUCT.INDEX + '/' + id}>View detail</Link>,
    key: 'view_detail',
    icon: <FolderViewOutlined />,
  },
  {
    label: (
      <Popup title="Update Product" content={<UpdateProduct id={id} />}>
        Update Product
      </Popup>
    ),
    key: 'edit',
    icon: <EditOutlined />,
  },
  {
    label: (
      <Popup
        title="Delete Product"
        content={<DeleteProduct id={id} product_name={product_name} />}
      >
        Delete Product
      </Popup>
    ),
    key: 'delete',
    icon: <CloseCircleOutlined />,
  },
];

export const ViewTypePricesOptionDropdown = (id) => [
  {
    label: (
      <Popup title="Update Type Price" content={<UpdateTypePrices id={id} />}>
        Update Type Price
      </Popup>
    ),
    key: 'edit',
    icon: <EditOutlined />,
  },
  {
    label: (
      <Popup title="Delete Type Price" content={<DeleteTypePrice id={id} />}>
        Delete Type Price
      </Popup>
    ),
    key: 'delete',
    icon: <CloseCircleOutlined />,
  },
];

export const ViewPromotionOptionDropdown = (id, code) => [
  {
    label: (
      <Popup
        title="Update Promotion"
        content={'<UpdatePromotion code={code} />'}
      >
        Update Promotion
      </Popup>
    ),
    key: 'edit',
    icon: <EditOutlined />,
  },
  {
    label: (
      <Popup
        title="Delete Promotion"
        content={<DeletePromotion id={id} code={code} />}
      >
        Delete Promotion
      </Popup>
    ),
    key: 'delete',
    icon: <CloseCircleOutlined />,
  },
];

export const ViewOrderOptionDropdown = (id, name) => [
  {
    label: (
      <Popup
        title="Update Order"
        content={<UpdateOrder id={id} name={name} />}
      >
        Update Order
      </Popup>
    ),
    key: 'edit',
    icon: <EditOutlined />,
  },
  {
    label: (
      <Popup
        title="Delete Order"
        content={<DeleteOrder id={id} name={name} />}
      >
        Delete Order
      </Popup>
    ),
    key: 'delete',
    icon: <CloseCircleOutlined />,
  },
  {
    label: (
      <Link to={`/order-detail/`}>
        View Detail
      </Link>
    ),
    key: 'view',
    icon: <EyeOutlined />,
  },
  
];
export const ViewOrderDetailOptionDropdown = (id, name) => [
  {
    label: (
      <Popup
        title="Update Order"
      >
        Update 
      </Popup>
    ),
    key: 'edit',
    icon: <EditOutlined />,
  },
  {
    label: (
      <Popup
        title="Delete Order"
      >
        Delete 
      </Popup>
    ),
    key: 'delete',
    icon: <CloseCircleOutlined />,
  },
  
];
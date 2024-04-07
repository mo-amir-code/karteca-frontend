export interface AppSliceType{
    desktop:DesktopApp,
    mobile:MobileApp,
    isPaymentStatusPageEnable: boolean,
    currentOrderId: string | null,
    refer: ReferType
}

interface DesktopApp{
    profile: "orders" | "dashboard" | "profile" | "addresses" | "notification" | "wishlist" | "orderDetails"
}

interface MobileApp{
    isProfileMenuOpen: boolean;
    searchTag: string | null
}

interface ReferType {
    isAddMoneyModalOpen: boolean
}
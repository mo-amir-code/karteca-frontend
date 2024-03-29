export interface AppSliceType{
    desktop:DesktopApp,
    mobile:MobileApp,
    isPaymentStatusPageEnable: boolean
}

interface DesktopApp{
    profile: "orders" | "dashboard" | "profile" | "addresses" | "notification" | "wishlist" | "orderDetails"
}

interface MobileApp{
    isProfileMenuOpen: boolean 
}
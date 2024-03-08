export interface AppSliceType{
    desktop:DesktopApp
}

interface DesktopApp{
    profile: "orders" | "dashboard" | "profile" | "addresses" | "notification" | "wishlist" | "orderDetails"
}
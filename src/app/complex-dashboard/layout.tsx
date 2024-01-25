export default function DashboardLayout({
    children,
    notification,
    revenue,
    users,
   login,
}: {
    children: React.ReactNode,
    notification: React.ReactNode,
    revenue: React.ReactNode,
    users: React.ReactNode,
    login:React.ReactNode
}) {

    const isLoggedIn = false
    return isLoggedIn ? (
        <>
            <div>{children}</div>
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div style={{ display: "flex", flex: 1 }}>{notification}</div>
            </div>
        </>
    ) : (login)
}
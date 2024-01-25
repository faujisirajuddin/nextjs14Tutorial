import Link from "next/link"
import Card from "../../../components/card"

export default function Notification() {
    return (
        <>
            <Card>
                <div>Notifiction</div>
                <br/>
                <Link href="/complex-dashboard/archived">Archived</Link>
                </Card>
        </>
    )
}
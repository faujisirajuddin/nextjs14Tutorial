import Image from "next/image";
import Link from "next/link";
import wonders from "./wonders"

export default function Home() {
    return (
        <>
            <main >
                <h1>New Wonders of the World</h1>
                <div>
                    {wonders.map((id:any, src:any, name:any) => (
                        <Link key={id} href={`/photo-feed/${id}`}>
                            <Image
                                alt={name}
                                src={src}
                                className="w-full object-cover aspect-square"
                            />
                        </Link>
                    ))}
                </div>
            </main>
        </>
    )
}
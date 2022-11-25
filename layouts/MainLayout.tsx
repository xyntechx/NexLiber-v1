import Head from "next/head";
import Topnav from "../components/topnav";
import Footer from "../components/footer";

interface WorkbookLayoutProps {
    title: string;
    description: string;
    url: string;
    children: React.ReactNode | React.ReactNode[];
}

const MainLayout = ({
    title,
    description,
    url,
    children,
}: WorkbookLayoutProps) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content={description} />
                <meta name="author" content="Nyx Iskandar" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta
                    property="og:image"
                    content="https://nexliber.com/og-image.png"
                />
                <meta
                    property="og:url"
                    content={`https://nexliber.com${url}`}
                />
                <meta property="og:type" content="website" />
            </Head>

            <main
                style={{
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Topnav />
                <>{children}</>
                <Footer />
            </main>
        </div>
    );
};

export default MainLayout;

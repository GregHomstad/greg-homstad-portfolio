import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <>
            <Helmet>
                <title>Page Not Found | Greg Homstad</title>
                <meta name="description" content="The page you're looking for doesn't exist." />
            </Helmet>

            <section className="min-h-[85vh] flex items-center justify-center px-6">
                <div className="text-center">
                    <div className="text-label mb-6">404</div>
                    <h1 className="text-display text-[clamp(3rem,8vw,5rem)] text-[var(--text)] mb-6">
                        Page not found
                    </h1>
                    <p className="text-[1.1rem] text-[var(--muted)] mb-12 max-w-[400px] mx-auto">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                    <Link to="/" className="btn-primary px-12 py-4">
                        Back to Home
                    </Link>
                </div>
            </section>
        </>
    )
}

import { useEffect, useState, type JSX } from "react";
import { createRoot } from "react-dom/client";

export function Bootstrap()
{
    const [App, setApp] = useState<(() => JSX.Element) | null>(null);

    useEffect(() =>
    {
        const appPromise = import('./app');
        const timePromise = new Promise<'delay'>(resolve => setTimeout(() => resolve('delay'), 3000));

        Promise
            .all([appPromise, timePromise])
            .then(arr =>
            {
                const app = arr[0].Main;
                setApp(() => app);
            });
    }, []);

    if (!App) return <span>Loading...</span>;

    return <App />;
}

createRoot(document.getElementById('root')!).render(<Bootstrap />);
export default function Loading() {
    return (
        <div className="flex h-64 items-center justify-center">
            <div className="text-center">
                <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-blue-700 border-t-transparent"></div>

                <p className="text-lg font-medium">
                    Loading meetings...
                </p>
            </div>
        </div>
    );
}
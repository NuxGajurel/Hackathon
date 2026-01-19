'use client';

import { GoogleOAuthProvider } from '@react-oauth/google';

export default function GoogleAuthWrapper({ children }: { children: React.ReactNode }) {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

    // Use a fallback or throw error if completely missing, but for build safety, use the likely known ID or a placeholder.
    // The previous code returned children WITHOUT provider, which crashed the children that used the hook.
    // We must return the Provider even if the ID is suspect, or handle the missing ID more gracefully.

    const fallbackId = '535449426827-4jguoutlcigq66pcd0gsv4c4pdos2t7a.apps.googleusercontent.com';
    const finalClientId = clientId || fallbackId;

    if (!finalClientId) {
        console.warn('Google Client ID is missing. Auth features may not work.');
    }

    // Always wrap with Provider to avoid "must be used within GoogleOAuthProvider" error
    return (
        <GoogleOAuthProvider clientId={finalClientId}>
            {children}
        </GoogleOAuthProvider>
    );


}

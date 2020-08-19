// Import firebase modules.
import * as firebase from "firebase/app";
import "firebase/auth";
// Import firebaseui module.
import * as firebaseui from 'firebaseui'
// Import gcip-iap module.
import * as ciap from 'gcip-iap';



// The project configuration.
const configs = {
    // Configuration for project identified by API key API_KEY1.
    API_KEY1: {
        authDomain: 'project-id1.firebaseapp.com',
        // Decide whether to ask user for identifier to figure out
        // what tenant to select or whether to present all the tenants to select from.
        displayMode: 'optionFirst', // Or identifierFirst
        // The terms of service URL and privacy policy URL for the page
        // where the user select tenant or enter email for tenant/provider
        // matching.
        tosUrl: 'http://localhost/tos',
        privacyPolicyUrl: 'http://localhost/privacypolicy',
        callbacks: {
            // The callback to trigger when the selection tenant page
            // or enter email for tenant matching page is shown.
            selectTenantUiShown: () => {
                // Show title and additional display info.
            },
            // The callback to trigger when the sign-in page
            // is shown.
            signInUiShown: (tenantId) => {
                // Show tenant title and additional display info.
            },
            beforeSignInSuccess: (user) => {
                // Do additional processing on user before sign-in is
                // complete.
                return Promise.resolve(user);
            }
        },
        tenants: {
            // Tenant configuration for tenant ID tenantId1.
            tenantId1: {
                // Display name, button color and icon URL of the
                // tenant selection button. Only needed if you are
                // using the option first option.
                displayName: 'ACME',
                buttonColor: '#2F2F2F',
                iconUrl: '<icon-url-of-sign-in-button>',
                // Sign-in providers enabled for tenantId1.
                signInOptions: [
                    // Microsoft sign-in.
                    {
                        provider: 'microsoft.com',
                        providerName: 'Microsoft',
                        buttonColor: '#2F2F2F',
                        iconUrl: '<icon-url-of-sign-in-button>',
                        loginHintKey: 'login_hint'
                    },
                    // Email/password sign-in.
                    {
                        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                        // Do not require display name on sign up.
                        requireDisplayName: false
                    },
                    // SAML provider. (multiple SAML providers can be passed)
                    {
                        provider: 'saml.my-provider1',
                        providerName: 'SAML provider',
                        fullLabel: 'Employee Login',
                        buttonColor: '#4666FF',
                        iconUrl: 'https://www.example.com/photos/my_idp/saml.png'
                    },
                ],
                // If there is only one sign-in provider eligible for the user,
                // whether to show the provider selection page.
                immediateFederatedRedirect: true,
                signInFlow: 'redirect', // Or popup
                // The terms of service URL and privacy policy URL for the sign-in page
                // specific to each tenant.
                tosUrl: 'http://localhost/tenant1/tos',
                privacyPolicyUrl: 'http://localhost/tenant1/privacypolicy'
            },
            // Tenant configuration for tenant ID tenantId2.
            tenantId2: {
                displayName: 'OCP',
                buttonColor: '#2F2F2F',
                iconUrl: '<icon-url-of-sign-in-button>',
                // Tenant2 supports a SAML, OIDC and Email/password sign-in.
                signInOptions: [
                    // Email/password sign-in.
                    {
                        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                        // Do not require display name on sign up.
                        requireDisplayName: false
                    },
                    // SAML provider. (multiple SAML providers can be passed)
                    {
                        provider: 'saml.my-provider2',
                        providerName: 'SAML provider',
                        fullLabel: 'Contractor Portal',
                        buttonColor: '#4666FF',
                        iconUrl: 'https://www.example.com/photos/my_idp/saml.png'
                    },
                    // OIDC provider. (multiple OIDC providers can be passed)
                    {
                        provider: 'oidc.my-provider1',
                        providerName: 'OIDC provider',
                        buttonColor: '#4666FF',
                        iconUrl: 'https://www.example.com/photos/my_idp/oidc.png'
                    },
                ],
            },
        },
    },
};
const configs = {
    // ...
}
const handler = new firebaseui.auth.FirebaseUiHandler(
    '#firebaseui-auth-container', configs);
const ciapInstance = new ciap.Authentication(handler);
ciapInstance.start();
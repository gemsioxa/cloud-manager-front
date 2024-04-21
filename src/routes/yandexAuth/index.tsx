import React, { useEffect } from 'react'
import useScript from '../../hooks/useScript';

export default function YandexAuth() {
    useEffect(() => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const promise = useScript('https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-with-polyfills-latest.js');

        promise.then(() => {
            authYa();
        },
        // tslint:disable-next-line: no-shadowed-variable
        (error: { message: string; }) => {
            alert(`Ошибка: ${error.message}`);
        });
    }, []);


    const authYa = () => {
        // @ts-ignore
        YaAuthSuggest.init({
            client_id: '084813f30a7d4ef9b7b6d9b7360571c8',
            response_type: 'token',
            redirect_uri: `${window.location.origin}/auth-with-yandex/token`
            },
            `${window.location.origin}`, {
                view: 'button',
                parentId: 'auth-container',
                buttonView: 'main',
                buttonTheme: 'light',
                buttonSize: 'm',
                buttonBorderRadius: 4
             }
         )
            .then((result: {handler: Function}) => {
                return result.handler();
            })
            .then((data: {'access_token': string; 'token_type': string; 'expires_in': string; 'extra_data': {}}) => {
                
                if (!data.hasOwnProperty('error')) {
                    const link = document.createElement('a');
                    link.href = `cloud-manager://access_token=${JSON.stringify(data.access_token)}`;
                    document.body.appendChild(link);
                    link.click();
                }
            })
            // tslint:disable-next-line: no-shadowed-variable
            .catch((error: unknown) => {
                alert(`Что-то пошло не так: ${JSON.stringify(error)}`);
            });
    };

    
    return (
        <div>YandexAuth
            <div id="auth-container"></div>
        </div>
    )
}

import useScript from '../../hooks/useScript';


const YaAuth = () => {
    useScript('https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-token-with-polyfills-latest.js')
    .then(() => {
        // @ts-ignore
        YaSendSuggestToken(
        `${window.location.origin}`, {}
        );
    });

    return null;
};

export default YaAuth;

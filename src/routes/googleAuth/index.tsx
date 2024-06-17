import { useEffect } from 'react'
import './style.css';
const CLIENT_ID = '160295369495-8gjrv9u2o70act9du0is10rkd903ce9s.apps.googleusercontent.com';
// const SCOPES = 'https://www.googleapis.com/auth/drive';

export default function GoogleAuth() {

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.href);
    const access_token = searchParams.get('access_token');
    if (searchParams.size && access_token) {
      const link = document.createElement('a');
      link.href = `cloud-manager://google_token=${JSON.stringify(access_token)}`;
      document.body.appendChild(link);
      link.click();
      // setIsAuthenticated(true);
    } else {
      const oauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/drive&include_granted_scopes=true&response_type=token&state=state_parameter_passthrough_value&redirect_uri=http%3A//localhost:3000/auth-with-google&client_id=${CLIENT_ID}`;
      window.location.href = oauthUrl;
    }
  }, []);

  return (
    <div className={'google'}>
        <div className={'google__name'}>Добавить аккаунт</div>
        <div className={'google__description'}>
            Авторизуйтесь с помощью Google, чтобы добавить аккаунт в приложение Cloud Manager
        </div>
        <div className={'google__authenticated'}>
            Успешно. Теперь можете закрыть эту страницу...
        </div>
    </div>
  )
}
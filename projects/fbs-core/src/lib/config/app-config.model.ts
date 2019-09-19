export interface ConfigModel {
    appName?: 'StayInCuba';
    mock?: boolean;
    logger?: boolean;
    apiBaseUrl?: string;
    apiVersionName?: string;
    clientBaseUrl?: string; // Ip o Host donde se despliega el aplicativo
    lenguaje?: string;
    secretKey?: string;
}

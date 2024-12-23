/**
 * RUVDS API
 * # Введение  RUVDS API позволяет управлять серверами с помощью HTTP запросов.  API позволяет автоматически создать множество серверов, получить их статус, информацию о тарифах, датацентрах, платежах при помощи скриптов.  Документация по API начинается с общего обзора технологий, которые были реализованы. Затем представлена справочная информация о вызовах API.   ## История изменений |Версия|Дата|Изменения| |---|---|---| |2.16|2024-07-19| Для всех запросов добавлены JavaScript примеры. | |2.15|2024-07-04| Для всех запросов добавлены Python примеры. | |2.14|2024-06-26| Для всех запросов добавлены Powershell примеры. | |2.13|2024-06-19| Для всех запросов добавлены cURL примеры. | |2.12|2024-06-11| Добавлена возможность получения состояния питания и даты, до которой оплачен сервер. В методы управления сервером, добавлен возвращаемый код ошибки `409`. | |2.11|2024-05-29| Добавлена возможность управления SSH ключами и указания SSH ключа при создании сервера. | |2.10|2023-11-27| Добавлена возможность получения начального пароля от сервера при помощи GET запроса. `GET /v2/servers/$VIRTUAL_SERVER_ID/start_password` Требуется токен с правами `remove`. | |2.9|2023-11-24| Добавлена возможность получения скриншота сервера. `GET /v2/servers/$VIRTUAL_SERVER_ID/screenshot` | |2.8|2023-11-20| Ответ со статусом `403` теперь возвращает объект `api_forbidden_error`. В данном объекте дополнительно содержится поле `user_id`. | |2.7|2023-11-09| Добавлена возможность получения информации о стоимости продления виртуального сервера. `GET /v2/servers/$VIRTUAL_SERVER_ID/cost` | |2.6|2023-11-09| Добавлена возможность получения начального пароля от сервера. `POST /v2/servers/$VIRTUAL_SERVER_ID/start_password` | |2.5|2023-11-08| Добавлено получение IP адресов виртуального сервера. `GET /v2/servers/$VIRTUAL_SERVER_ID/networks` | |2.4|2023-11-07| Добавлено поле `datacenter` в объект `server`, который возвращается при получении статуса сервера. | |2.3|2023-10-31| Теперь можно предварительно узнать стоимость создания и изменения сервера при помощи параметра `get_price_only`. <br /><br /> Изменен возвращаемый объект при изменении сервера `PUT /v2/servers`. | |2.2|2023-10-23| В модель `action_error` добавлены новые типы ошибок `server_wait_for_payment` и `too_much_servers_wait_for_payment`. <br /><br /> В модель `api_action` добавлен статус `wait_user_action`. <br /><br /> Добавлена возможность выпускать токен с правами на запись. | |2.1|2023-10-12| В модель `api_error` добавлены новые типы ошибок `conflict` и `unexpected_error`. |   ## Запросы Основоной URL, на который отправляются запросы: `https://api.ruvds.com`.  Все запросы выполняются посредством HTTPS на соответствующий URI. Таким образом весть трафик зашифрован. Методы запросов соответствуют HTTP протоколу.  |Метод HTTP|Использование| |---|---| |GET| Получение информации. Данный запрос не изменяет объект. | |DELETE| Удаление объекта. Если объект не найден, то будет возвращен соответствующий код. Идемпотентность означает, что перед удалением нет необходимости проверять наличие объекта. Конечное состояние после удаления будет одним и тем же независимо от наличия объекта. | |PUT| Обновление объекта. | |POST| Создание объекта. | 
 *
 * The version of the OpenAPI document: 2.16
 * Contact: support@ruvds.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AllServersResponse from '../model/AllServersResponse';
import ApiAction from '../model/ApiAction';
import ApiError from '../model/ApiError';
import ApiForbiddenError from '../model/ApiForbiddenError';
import Server from '../model/Server';
import ServerActionCreate from '../model/ServerActionCreate';
import ServerChange from '../model/ServerChange';
import ServerChangeResponse from '../model/ServerChangeResponse';
import ServerCost from '../model/ServerCost';
import ServerCreate from '../model/ServerCreate';
import ServerCreateResponse from '../model/ServerCreateResponse';
import ServerNetworksResponse from '../model/ServerNetworksResponse';
import ServerPaidTill from '../model/ServerPaidTill';
import ServerPowerState from '../model/ServerPowerState';
import StartPassword from '../model/StartPassword';
import StartPasswordResponse from '../model/StartPasswordResponse';

/**
* Servers service.
* @module api/ServersApi
* @version 2.16
*/
export default class ServersApi {

    /**
    * Constructs a new ServersApi. 
    * @alias module:api/ServersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the serversActionCreate operation.
     * @callback module:api/ServersApi~serversActionCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiAction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Отправка команды виртуальному серверу
     * Для отправки команды виртуальному серверу отправьте PUT пост запрос по адресу `/v2/servers/$VIRTUAL_SERVER_ID/actions` установив необходимые параметры.  Возвращаемый код 200 Accepted говорит об успешной постановки задачи в очередь. Результат выполения можно получить из статуса соответствующего действия. 
     * @param {Number} virtualServerId Уникальный ID виртуального сервера.
     * @param {module:model/ServerActionCreate} serverActionCreate 
     * @param {module:api/ServersApi~serversActionCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiAction}
     */
    serversActionCreate(virtualServerId, serverActionCreate, callback) {
      let postBody = serverActionCreate;
      // verify the required parameter 'virtualServerId' is set
      if (virtualServerId === undefined || virtualServerId === null) {
        throw new Error("Missing the required parameter 'virtualServerId' when calling serversActionCreate");
      }
      // verify the required parameter 'serverActionCreate' is set
      if (serverActionCreate === undefined || serverActionCreate === null) {
        throw new Error("Missing the required parameter 'serverActionCreate' when calling serversActionCreate");
      }

      let pathParams = {
        'virtual_server_id': virtualServerId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer_auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiAction;
      return this.apiClient.callApi(
        '/v2/servers/{virtual_server_id}/actions', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the serversChange operation.
     * @callback module:api/ServersApi~serversChangeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServerChangeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Изменение виртуального сервера
     * Для изменения виртуального сервера отправьте PUT запрос по адресу `/v2/servers` установив необходимые параметры.  Необходимые параметры передаются в теле JSON. Нужно передать хотя бы один из необязательных параметров. Возвращаемый код 200 Accepted говорит об успешной постановки задачи в очередь. Это не гарантирует успешное изменение сервера. В ответ приходит JSON объект `action`. Информация о получении статуса действия в разделе `Actions`. 
     * @param {module:model/ServerChange} serverChange 
     * @param {Object} opts Optional parameters
     * @param {Boolean} [getPriceOnly = false)] Позволяет получить цену данной конфигурации без реального создания сервера. При рассчете цены учитываются все промокоды и скидки. При изменении сервера возвращается стоимость без реального изменения сервера.
     * @param {module:api/ServersApi~serversChangeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServerChangeResponse}
     */
    serversChange(serverChange, opts, callback) {
      opts = opts || {};
      let postBody = serverChange;
      // verify the required parameter 'serverChange' is set
      if (serverChange === undefined || serverChange === null) {
        throw new Error("Missing the required parameter 'serverChange' when calling serversChange");
      }

      let pathParams = {
      };
      let queryParams = {
        'get_price_only': opts['getPriceOnly']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer_auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ServerChangeResponse;
      return this.apiClient.callApi(
        '/v2/servers', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the serversCostGet operation.
     * @callback module:api/ServersApi~serversCostGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServerCost} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение информации о стоимости виртуального сервера.
     * Для получения информации о стоимости виртуального сервера отправьте GET запрос по адресу `/v2/servers/$VIRTUAL_SERVER_ID/cost`.
     * @param {Number} virtualServerId Уникальный ID виртуального сервера.
     * @param {module:api/ServersApi~serversCostGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServerCost}
     */
    serversCostGet(virtualServerId, callback) {
      let postBody = null;
      // verify the required parameter 'virtualServerId' is set
      if (virtualServerId === undefined || virtualServerId === null) {
        throw new Error("Missing the required parameter 'virtualServerId' when calling serversCostGet");
      }

      let pathParams = {
        'virtual_server_id': virtualServerId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ServerCost;
      return this.apiClient.callApi(
        '/v2/servers/{virtual_server_id}/cost', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the serversCreate operation.
     * @callback module:api/ServersApi~serversCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServerCreateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Создание виртуального сервера
     * Для создания нового сервера отправьте POST пост запрос по адресу `/v2/servers` установив необходимые параметры.  Необходимые параметры передаются в теле JSON. Возвращаемый код 200 Accepted говорит об успешной постановки задачи в очередь. Это не гарантирует успешное создание сервера. Прогресс создания можно получить из статуса соответствующего действия. 
     * @param {module:model/ServerCreate} serverCreate 
     * @param {Object} opts Optional parameters
     * @param {Boolean} [getPriceOnly = false)] Позволяет получить цену данной конфигурации без реального создания сервера. При рассчете цены учитываются все промокоды и скидки. При изменении сервера возвращается стоимость без реального изменения сервера.
     * @param {module:api/ServersApi~serversCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServerCreateResponse}
     */
    serversCreate(serverCreate, opts, callback) {
      opts = opts || {};
      let postBody = serverCreate;
      // verify the required parameter 'serverCreate' is set
      if (serverCreate === undefined || serverCreate === null) {
        throw new Error("Missing the required parameter 'serverCreate' when calling serversCreate");
      }

      let pathParams = {
      };
      let queryParams = {
        'get_price_only': opts['getPriceOnly']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer_auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ServerCreateResponse;
      return this.apiClient.callApi(
        '/v2/servers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the serversDelete operation.
     * @callback module:api/ServersApi~serversDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiAction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Удаление виртуального сервера
     * Для удаления виртуального сервера отправьте DELETE запрос по адресу `/v2/servers/$VIRTUAL_SERVER_ID`. 
     * @param {Number} virtualServerId Уникальный ID виртуального сервера.
     * @param {module:api/ServersApi~serversDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiAction}
     */
    serversDelete(virtualServerId, callback) {
      let postBody = null;
      // verify the required parameter 'virtualServerId' is set
      if (virtualServerId === undefined || virtualServerId === null) {
        throw new Error("Missing the required parameter 'virtualServerId' when calling serversDelete");
      }

      let pathParams = {
        'virtual_server_id': virtualServerId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ApiAction;
      return this.apiClient.callApi(
        '/v2/servers/{virtual_server_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the serversGet operation.
     * @callback module:api/ServersApi~serversGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Server} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение информации о виртуальном сервере.
     * Для получения информации о виртуальном сервере отправьте GET запрос по адресу `/v2/servers/$VIRTUAL_SERVER_ID`.
     * @param {Number} virtualServerId Уникальный ID виртуального сервера.
     * @param {module:api/ServersApi~serversGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Server}
     */
    serversGet(virtualServerId, callback) {
      let postBody = null;
      // verify the required parameter 'virtualServerId' is set
      if (virtualServerId === undefined || virtualServerId === null) {
        throw new Error("Missing the required parameter 'virtualServerId' when calling serversGet");
      }

      let pathParams = {
        'virtual_server_id': virtualServerId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Server;
      return this.apiClient.callApi(
        '/v2/servers/{virtual_server_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the serversList operation.
     * @callback module:api/ServersApi~serversListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AllServersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Список всех виртуальных серверов
     * Чтобы получить список всех виртуальных серверов в аккаунте отправьте GET запрос по адресу `/v2/servers`.  В ответе будет JSON объект с ключом `servers`. Он будет содержать массив статусов виртуальных серверов. 
     * @param {Object} opts Optional parameters
     * @param {Number} [perPage = 25)] Количество элементов на одной странице
     * @param {Number} [page = 1)] Номер страницы в результате
     * @param {module:model/String} [sort = 'virtual_server_id')] * `virtual_server_id` - Сортировка по полю `virtual_server_id`. 
     * @param {module:model/String} [order = 'asc')] * `asc` - Сортировка по возрастанию.  * `desc` - Сортировка по убыванию. 
     * @param {module:api/ServersApi~serversListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AllServersResponse}
     */
    serversList(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'per_page': opts['perPage'],
        'page': opts['page'],
        'sort': opts['sort'],
        'order': opts['order']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AllServersResponse;
      return this.apiClient.callApi(
        '/v2/servers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the serversNetworkGet operation.
     * @callback module:api/ServersApi~serversNetworkGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServerNetworksResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение информации об IP адресах виртуального сервера.
     * Для получения информации об IP адресах виртуального сервера отправьте GET запрос по адресу `/v2/servers/$VIRTUAL_SERVER_ID/networks`.
     * @param {Number} virtualServerId Уникальный ID виртуального сервера.
     * @param {module:api/ServersApi~serversNetworkGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServerNetworksResponse}
     */
    serversNetworkGet(virtualServerId, callback) {
      let postBody = null;
      // verify the required parameter 'virtualServerId' is set
      if (virtualServerId === undefined || virtualServerId === null) {
        throw new Error("Missing the required parameter 'virtualServerId' when calling serversNetworkGet");
      }

      let pathParams = {
        'virtual_server_id': virtualServerId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ServerNetworksResponse;
      return this.apiClient.callApi(
        '/v2/servers/{virtual_server_id}/networks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the serversPaidTillGet operation.
     * @callback module:api/ServersApi~serversPaidTillGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServerPaidTill} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение даты и времени до которого оплачен сервера.
     * Для получения даты и времени, до которого оплачен виртуальныq сервер, отправьте GET запрос по адресу `/v2/servers/$VIRTUAL_SERVER_ID/paid_till`. 
     * @param {Number} virtualServerId Уникальный ID виртуального сервера.
     * @param {module:api/ServersApi~serversPaidTillGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServerPaidTill}
     */
    serversPaidTillGet(virtualServerId, callback) {
      let postBody = null;
      // verify the required parameter 'virtualServerId' is set
      if (virtualServerId === undefined || virtualServerId === null) {
        throw new Error("Missing the required parameter 'virtualServerId' when calling serversPaidTillGet");
      }

      let pathParams = {
        'virtual_server_id': virtualServerId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ServerPaidTill;
      return this.apiClient.callApi(
        '/v2/servers/{virtual_server_id}/paid_till', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the serversPowerStateGet operation.
     * @callback module:api/ServersApi~serversPowerStateGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServerPowerState} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение состояния питания виртуального сервера.
     * Для получения состояния питания виртуального сервера отправьте GET запрос по адресу `/v2/servers/$VIRTUAL_SERVER_ID/power_state`.  Данный вызов непосредственно опрашивает физическую машину о состоянии виртуального сервера и является блокирующим. Таймаут вызова 10 сек. Если в данный момент статус сервера получить не удаётся, то возвращается ошибка с кодом `500`. 
     * @param {Number} virtualServerId Уникальный ID виртуального сервера.
     * @param {module:api/ServersApi~serversPowerStateGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServerPowerState}
     */
    serversPowerStateGet(virtualServerId, callback) {
      let postBody = null;
      // verify the required parameter 'virtualServerId' is set
      if (virtualServerId === undefined || virtualServerId === null) {
        throw new Error("Missing the required parameter 'virtualServerId' when calling serversPowerStateGet");
      }

      let pathParams = {
        'virtual_server_id': virtualServerId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ServerPowerState;
      return this.apiClient.callApi(
        '/v2/servers/{virtual_server_id}/power_state', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the serversScreenshot operation.
     * @callback module:api/ServersApi~serversScreenshotCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение снимка экрана виртуального сервера.
     * Для получения снимка экрана виртуального сервера отправьте GET запрос по адресу `/v2/servers/$VIRTUAL_SERVER_ID/screenshot`.
     * @param {Number} virtualServerId Уникальный ID виртуального сервера.
     * @param {module:model/String} screenSize 
     * @param {module:api/ServersApi~serversScreenshotCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    serversScreenshot(virtualServerId, screenSize, callback) {
      let postBody = null;
      // verify the required parameter 'virtualServerId' is set
      if (virtualServerId === undefined || virtualServerId === null) {
        throw new Error("Missing the required parameter 'virtualServerId' when calling serversScreenshot");
      }
      // verify the required parameter 'screenSize' is set
      if (screenSize === undefined || screenSize === null) {
        throw new Error("Missing the required parameter 'screenSize' when calling serversScreenshot");
      }

      let pathParams = {
        'virtual_server_id': virtualServerId
      };
      let queryParams = {
        'screen_size': screenSize
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basic_auth', 'bearer_auth'];
      let contentTypes = [];
      let accepts = ['image/jpeg', 'application/json'];
      let returnType = File;
      return this.apiClient.callApi(
        '/v2/servers/{virtual_server_id}/screenshot', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the serversStartPassword operation.
     * @callback module:api/ServersApi~serversStartPasswordCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StartPasswordResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение пароля для доступа к виртуальному серверу.
     * Для получение пароля для доступа к виртуальному серверу отправьте POST пост запрос по адресу `/v2/servers/$VIRTUAL_SERVER_ID/start_password`. В теле запроса передается пароль от личного кабинета ruvds.com  Обратите внимание, что в целях безопасности пароль доступа к серверу рекомендуется сменить при первом заходе на сервер. 
     * @param {Number} virtualServerId Уникальный ID виртуального сервера.
     * @param {module:model/StartPassword} startPassword 
     * @param {module:api/ServersApi~serversStartPasswordCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StartPasswordResponse}
     */
    serversStartPassword(virtualServerId, startPassword, callback) {
      let postBody = startPassword;
      // verify the required parameter 'virtualServerId' is set
      if (virtualServerId === undefined || virtualServerId === null) {
        throw new Error("Missing the required parameter 'virtualServerId' when calling serversStartPassword");
      }
      // verify the required parameter 'startPassword' is set
      if (startPassword === undefined || startPassword === null) {
        throw new Error("Missing the required parameter 'startPassword' when calling serversStartPassword");
      }

      let pathParams = {
        'virtual_server_id': virtualServerId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer_auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = StartPasswordResponse;
      return this.apiClient.callApi(
        '/v2/servers/{virtual_server_id}/start_password', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the serversStartPasswordGet operation.
     * @callback module:api/ServersApi~serversStartPasswordGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StartPasswordResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение пароля для доступа к виртуальному серверу.
     * Для получение пароля для доступа к виртуальному серверу отправьте GET запрос по адресу `/v2/servers/$VIRTUAL_SERVER_ID/start_password`. Для вызова данного метода необходим токен с правами `remove`.   Обратите внимание, что в целях безопасности пароль доступа к серверу **рекомендуется сменить** при первом заходе на сервер. 
     * @param {Number} virtualServerId Уникальный ID виртуального сервера.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} [responseFormat = 'base64')] В каком формате будут в ответе представлены байты строки с паролем. По-умолчанию, *base64*. Перевод в байты необходим по той причине, что пароль может содержать специальные симоволы.
     * @param {module:api/ServersApi~serversStartPasswordGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StartPasswordResponse}
     */
    serversStartPasswordGet(virtualServerId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'virtualServerId' is set
      if (virtualServerId === undefined || virtualServerId === null) {
        throw new Error("Missing the required parameter 'virtualServerId' when calling serversStartPasswordGet");
      }

      let pathParams = {
        'virtual_server_id': virtualServerId
      };
      let queryParams = {
        'response_format': opts['responseFormat']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = StartPasswordResponse;
      return this.apiClient.callApi(
        '/v2/servers/{virtual_server_id}/start_password', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}

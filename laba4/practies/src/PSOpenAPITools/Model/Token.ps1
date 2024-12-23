#
# RUVDS API
# # Введение  RUVDS API позволяет управлять серверами с помощью HTTP запросов.  API позволяет автоматически создать множество серверов, получить их статус, информацию о тарифах, датацентрах, платежах при помощи скриптов.  Документация по API начинается с общего обзора технологий, которые были реализованы. Затем представлена справочная информация о вызовах API.   ## История изменений |Версия|Дата|Изменения| |---|---|---| |2.16|2024-07-19| Для всех запросов добавлены JavaScript примеры. | |2.15|2024-07-04| Для всех запросов добавлены Python примеры. | |2.14|2024-06-26| Для всех запросов добавлены Powershell примеры. | |2.13|2024-06-19| Для всех запросов добавлены cURL примеры. | |2.12|2024-06-11| Добавлена возможность получения состояния питания и даты, до которой оплачен сервер. В методы управления сервером, добавлен возвращаемый код ошибки `409`. | |2.11|2024-05-29| Добавлена возможность управления SSH ключами и указания SSH ключа при создании сервера. | |2.10|2023-11-27| Добавлена возможность получения начального пароля от сервера при помощи GET запроса. `GET /v2/servers/$VIRTUAL_SERVER_ID/start_password` Требуется токен с правами `remove`. | |2.9|2023-11-24| Добавлена возможность получения скриншота сервера. `GET /v2/servers/$VIRTUAL_SERVER_ID/screenshot` | |2.8|2023-11-20| Ответ со статусом `403` теперь возвращает объект `api_forbidden_error`. В данном объекте дополнительно содержится поле `user_id`. | |2.7|2023-11-09| Добавлена возможность получения информации о стоимости продления виртуального сервера. `GET /v2/servers/$VIRTUAL_SERVER_ID/cost` | |2.6|2023-11-09| Добавлена возможность получения начального пароля от сервера. `POST /v2/servers/$VIRTUAL_SERVER_ID/start_password` | |2.5|2023-11-08| Добавлено получение IP адресов виртуального сервера. `GET /v2/servers/$VIRTUAL_SERVER_ID/networks` | |2.4|2023-11-07| Добавлено поле `datacenter` в объект `server`, который возвращается при получении статуса сервера. | |2.3|2023-10-31| Теперь можно предварительно узнать стоимость создания и изменения сервера при помощи параметра `get_price_only`. <br /><br /> Изменен возвращаемый объект при изменении сервера `PUT /v2/servers`. | |2.2|2023-10-23| В модель `action_error` добавлены новые типы ошибок `server_wait_for_payment` и `too_much_servers_wait_for_payment`. <br /><br /> В модель `api_action` добавлен статус `wait_user_action`. <br /><br /> Добавлена возможность выпускать токен с правами на запись. | |2.1|2023-10-12| В модель `api_error` добавлены новые типы ошибок `conflict` и `unexpected_error`. |   ## Запросы Основоной URL, на который отправляются запросы: `https://api.ruvds.com`.  Все запросы выполняются посредством HTTPS на соответствующий URI. Таким образом весть трафик зашифрован. Методы запросов соответствуют HTTP протоколу.  |Метод HTTP|Использование| |---|---| |GET| Получение информации. Данный запрос не изменяет объект. | |DELETE| Удаление объекта. Если объект не найден, то будет возвращен соответствующий код. Идемпотентность означает, что перед удалением нет необходимости проверять наличие объекта. Конечное состояние после удаления будет одним и тем же независимо от наличия объекта. | |PUT| Обновление объекта. | |POST| Создание объекта. | 
# Version: 2.16
# Contact: support@ruvds.com
# Generated by OpenAPI Generator: https://openapi-generator.tech
#

<#
.SYNOPSIS

No summary available.

.DESCRIPTION

No description available.

.PARAMETER TokenId
Уникальный ID токена.
.PARAMETER Name
Произвольное имя токена, которое задается при создании.
.PARAMETER Role
* `read` - Токен только для чтения. Позволяет выполнять практически все HTTP GET запросы к API.   Т. е. получать список серверов, платежей и. т. д.  * `write` - Все права `read` и дополнительно позволяет создавать и изменять новые объект.   Т. е. HTTP методы POST и PUT. Например, создавать новые сервера и изменять конфигурацию сервера.  * `remove` - Все права `read` и `write` и дополнительно позволяет удалять виртуальные сервера.   Т. е. HTTP метод DELETE. 
.PARAMETER Expiry
Дата экспирации токена. Если не задана, то токен работает все время, пока не будет удален из личного кабинета [https://ruvds.com/my/settings/api](https://ruvds.com/my/settings/api). 
.OUTPUTS

Token<PSCustomObject>
#>

function Initialize-Token {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${TokenId},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Name},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [ValidateSet("read", "write", "remove")]
        [String]
        ${Role},
        [Parameter(Position = 3, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[System.DateTime]]
        ${Expiry}
    )

    Process {
        'Creating PSCustomObject: PSOpenAPITools => Token' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        if ($null -eq $TokenId) {
            throw "invalid value for 'TokenId', 'TokenId' cannot be null."
        }

        if ($null -eq $Name) {
            throw "invalid value for 'Name', 'Name' cannot be null."
        }

        if ($null -eq $Role) {
            throw "invalid value for 'Role', 'Role' cannot be null."
        }


        $PSO = [PSCustomObject]@{
            "token_id" = ${TokenId}
            "name" = ${Name}
            "role" = ${Role}
            "expiry" = ${Expiry}
        }


        return $PSO
    }
}

<#
.SYNOPSIS

Convert from JSON to Token<PSCustomObject>

.DESCRIPTION

Convert from JSON to Token<PSCustomObject>

.PARAMETER Json

Json object

.OUTPUTS

Token<PSCustomObject>
#>
function ConvertFrom-JsonToToken {
    Param(
        [AllowEmptyString()]
        [string]$Json
    )

    Process {
        'Converting JSON to PSCustomObject: PSOpenAPITools => Token' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $JsonParameters = ConvertFrom-Json -InputObject $Json

        # check if Json contains properties not defined in Token
        $AllProperties = ("token_id", "name", "role", "expiry")
        foreach ($name in $JsonParameters.PsObject.Properties.Name) {
            if (!($AllProperties.Contains($name))) {
                throw "Error! JSON key '$name' not found in the properties: $($AllProperties)"
            }
        }

        If ([string]::IsNullOrEmpty($Json) -or $Json -eq "{}") { # empty json
            throw "Error! Empty JSON cannot be serialized due to the required property 'token_id' missing."
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "token_id"))) {
            throw "Error! JSON cannot be serialized due to the required property 'token_id' missing."
        } else {
            $TokenId = $JsonParameters.PSobject.Properties["token_id"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "name"))) {
            throw "Error! JSON cannot be serialized due to the required property 'name' missing."
        } else {
            $Name = $JsonParameters.PSobject.Properties["name"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "role"))) {
            throw "Error! JSON cannot be serialized due to the required property 'role' missing."
        } else {
            $Role = $JsonParameters.PSobject.Properties["role"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "expiry"))) { #optional property not found
            $Expiry = $null
        } else {
            $Expiry = $JsonParameters.PSobject.Properties["expiry"].value
        }

        $PSO = [PSCustomObject]@{
            "token_id" = ${TokenId}
            "name" = ${Name}
            "role" = ${Role}
            "expiry" = ${Expiry}
        }

        return $PSO
    }

}

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

.PARAMETER NotificationId
Уникальный ID оповещения.
.PARAMETER Status
* `read` - Нотификация прочитана. * `unread` - Нотификация непрочитана.
.PARAMETER VirtualServerId
ID сервера в системе.
.PARAMETER AddDt
Дата и время добавления оповещения
.PARAMETER StatusUpdateDt
Дата и время изменения статуса
.PARAMETER Type
* `custom_notification` - оповещение общего вида * `server_banned_by_admin` - сервер был заблокирован администратором * `server_blocked` - сервер был заблокирован * `payment_period_ending` - оплаченный период подходит к концу * `promo_ending` - промо период подходит к концу * `server_started` - сервер был разблокирован * `server_removed` - сервер был удален * `violation_smtp` - сервер был заблокирован за анонимный smtp * `cloud_short_of_money` - недостаточно средств для оплаты сервера за ресурсы * `violation_dns` - небезопасный dns * `net_outgoing_violation` - заблокирован за большой исходящий трафик * `net_outgoing_warning` - предупреждение о большом исходящем трафике * `violation_firewall` - на виртуалке неактивен firewall * `info_firewall_activated`- на виртуалке активирован firewall * `violation_app` - сервер заблокирован за вредоносное ПО
.PARAMETER NotificationData
No description available.
.OUTPUTS

Notification<PSCustomObject>
#>

function Initialize-Notification {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${NotificationId},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [ValidateSet("read", "unread")]
        [String]
        ${Status},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [Int32]
        ${VirtualServerId},
        [Parameter(Position = 3, ValueFromPipelineByPropertyName = $true)]
        [System.DateTime]
        ${AddDt},
        [Parameter(Position = 4, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[System.DateTime]]
        ${StatusUpdateDt},
        [Parameter(Position = 5, ValueFromPipelineByPropertyName = $true)]
        [ValidateSet("custom_notification", "server_banned_by_admin", "server_blocked", "payment_period_ending", "promo_ending", "server_started", "server_removed", "violation_smtp", "cloud_short_of_money", "violation_dns", "net_outgoing_violation", "net_outgoing_warning", "violation_firewall", "info_firewall_activated", "violation_app")]
        [String]
        ${Type},
        [Parameter(Position = 6, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${NotificationData}
    )

    Process {
        'Creating PSCustomObject: PSOpenAPITools => Notification' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        if ($null -eq $NotificationId) {
            throw "invalid value for 'NotificationId', 'NotificationId' cannot be null."
        }

        if ($null -eq $Status) {
            throw "invalid value for 'Status', 'Status' cannot be null."
        }

        if ($null -eq $VirtualServerId) {
            throw "invalid value for 'VirtualServerId', 'VirtualServerId' cannot be null."
        }

        if ($null -eq $AddDt) {
            throw "invalid value for 'AddDt', 'AddDt' cannot be null."
        }

        if ($null -eq $Type) {
            throw "invalid value for 'Type', 'Type' cannot be null."
        }


        $PSO = [PSCustomObject]@{
            "notification_id" = ${NotificationId}
            "status" = ${Status}
            "virtual_server_id" = ${VirtualServerId}
            "add_dt" = ${AddDt}
            "status_update_dt" = ${StatusUpdateDt}
            "type" = ${Type}
            "notification_data" = ${NotificationData}
        }


        return $PSO
    }
}

<#
.SYNOPSIS

Convert from JSON to Notification<PSCustomObject>

.DESCRIPTION

Convert from JSON to Notification<PSCustomObject>

.PARAMETER Json

Json object

.OUTPUTS

Notification<PSCustomObject>
#>
function ConvertFrom-JsonToNotification {
    Param(
        [AllowEmptyString()]
        [string]$Json
    )

    Process {
        'Converting JSON to PSCustomObject: PSOpenAPITools => Notification' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $JsonParameters = ConvertFrom-Json -InputObject $Json

        # check if Json contains properties not defined in Notification
        $AllProperties = ("notification_id", "status", "virtual_server_id", "add_dt", "status_update_dt", "type", "notification_data")
        foreach ($name in $JsonParameters.PsObject.Properties.Name) {
            if (!($AllProperties.Contains($name))) {
                throw "Error! JSON key '$name' not found in the properties: $($AllProperties)"
            }
        }

        If ([string]::IsNullOrEmpty($Json) -or $Json -eq "{}") { # empty json
            throw "Error! Empty JSON cannot be serialized due to the required property 'notification_id' missing."
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "notification_id"))) {
            throw "Error! JSON cannot be serialized due to the required property 'notification_id' missing."
        } else {
            $NotificationId = $JsonParameters.PSobject.Properties["notification_id"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "status"))) {
            throw "Error! JSON cannot be serialized due to the required property 'status' missing."
        } else {
            $Status = $JsonParameters.PSobject.Properties["status"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "virtual_server_id"))) {
            throw "Error! JSON cannot be serialized due to the required property 'virtual_server_id' missing."
        } else {
            $VirtualServerId = $JsonParameters.PSobject.Properties["virtual_server_id"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "add_dt"))) {
            throw "Error! JSON cannot be serialized due to the required property 'add_dt' missing."
        } else {
            $AddDt = $JsonParameters.PSobject.Properties["add_dt"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "status_update_dt"))) {
            throw "Error! JSON cannot be serialized due to the required property 'status_update_dt' missing."
        } else {
            $StatusUpdateDt = $JsonParameters.PSobject.Properties["status_update_dt"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "type"))) {
            throw "Error! JSON cannot be serialized due to the required property 'type' missing."
        } else {
            $Type = $JsonParameters.PSobject.Properties["type"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "notification_data"))) { #optional property not found
            $NotificationData = $null
        } else {
            $NotificationData = $JsonParameters.PSobject.Properties["notification_data"].value
        }

        $PSO = [PSCustomObject]@{
            "notification_id" = ${NotificationId}
            "status" = ${Status}
            "virtual_server_id" = ${VirtualServerId}
            "add_dt" = ${AddDt}
            "status_update_dt" = ${StatusUpdateDt}
            "type" = ${Type}
            "notification_data" = ${NotificationData}
        }

        return $PSO
    }

}


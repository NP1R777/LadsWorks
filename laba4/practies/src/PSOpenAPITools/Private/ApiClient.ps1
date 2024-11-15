#
# RUVDS API
# # Введение  RUVDS API позволяет управлять серверами с помощью HTTP запросов.  API позволяет автоматически создать множество серверов, получить их статус, информацию о тарифах, датацентрах, платежах при помощи скриптов.  Документация по API начинается с общего обзора технологий, которые были реализованы. Затем представлена справочная информация о вызовах API.   ## История изменений |Версия|Дата|Изменения| |---|---|---| |2.16|2024-07-19| Для всех запросов добавлены JavaScript примеры. | |2.15|2024-07-04| Для всех запросов добавлены Python примеры. | |2.14|2024-06-26| Для всех запросов добавлены Powershell примеры. | |2.13|2024-06-19| Для всех запросов добавлены cURL примеры. | |2.12|2024-06-11| Добавлена возможность получения состояния питания и даты, до которой оплачен сервер. В методы управления сервером, добавлен возвращаемый код ошибки `409`. | |2.11|2024-05-29| Добавлена возможность управления SSH ключами и указания SSH ключа при создании сервера. | |2.10|2023-11-27| Добавлена возможность получения начального пароля от сервера при помощи GET запроса. `GET /v2/servers/$VIRTUAL_SERVER_ID/start_password` Требуется токен с правами `remove`. | |2.9|2023-11-24| Добавлена возможность получения скриншота сервера. `GET /v2/servers/$VIRTUAL_SERVER_ID/screenshot` | |2.8|2023-11-20| Ответ со статусом `403` теперь возвращает объект `api_forbidden_error`. В данном объекте дополнительно содержится поле `user_id`. | |2.7|2023-11-09| Добавлена возможность получения информации о стоимости продления виртуального сервера. `GET /v2/servers/$VIRTUAL_SERVER_ID/cost` | |2.6|2023-11-09| Добавлена возможность получения начального пароля от сервера. `POST /v2/servers/$VIRTUAL_SERVER_ID/start_password` | |2.5|2023-11-08| Добавлено получение IP адресов виртуального сервера. `GET /v2/servers/$VIRTUAL_SERVER_ID/networks` | |2.4|2023-11-07| Добавлено поле `datacenter` в объект `server`, который возвращается при получении статуса сервера. | |2.3|2023-10-31| Теперь можно предварительно узнать стоимость создания и изменения сервера при помощи параметра `get_price_only`. <br /><br /> Изменен возвращаемый объект при изменении сервера `PUT /v2/servers`. | |2.2|2023-10-23| В модель `action_error` добавлены новые типы ошибок `server_wait_for_payment` и `too_much_servers_wait_for_payment`. <br /><br /> В модель `api_action` добавлен статус `wait_user_action`. <br /><br /> Добавлена возможность выпускать токен с правами на запись. | |2.1|2023-10-12| В модель `api_error` добавлены новые типы ошибок `conflict` и `unexpected_error`. |   ## Запросы Основоной URL, на который отправляются запросы: `https://api.ruvds.com`.  Все запросы выполняются посредством HTTPS на соответствующий URI. Таким образом весть трафик зашифрован. Методы запросов соответствуют HTTP протоколу.  |Метод HTTP|Использование| |---|---| |GET| Получение информации. Данный запрос не изменяет объект. | |DELETE| Удаление объекта. Если объект не найден, то будет возвращен соответствующий код. Идемпотентность означает, что перед удалением нет необходимости проверять наличие объекта. Конечное состояние после удаления будет одним и тем же независимо от наличия объекта. | |PUT| Обновление объекта. | |POST| Создание объекта. | 
# Version: 2.16
# Contact: support@ruvds.com
# Generated by OpenAPI Generator: https://openapi-generator.tech
#

function Invoke-ApiClient {
    [OutputType('System.Collections.Hashtable')]
    [CmdletBinding()]
    Param(
        [Parameter(Mandatory)]
        [string]$Uri,
        [Parameter(Mandatory)]
        [AllowEmptyCollection()]
        [string[]]$Accepts,
        [Parameter(Mandatory)]
        [AllowEmptyCollection()]
        [string[]]$ContentTypes,
        [Parameter(Mandatory)]
        [hashtable]$HeaderParameters,
        [Parameter(Mandatory)]
        [hashtable]$FormParameters,
        [Parameter(Mandatory)]
        [hashtable]$QueryParameters,
        [Parameter(Mandatory)]
        [hashtable]$CookieParameters,
        [Parameter(Mandatory)]
        [AllowEmptyString()]
        [string]$Body,
        [Parameter(Mandatory)]
        [string]$Method,
        [Parameter(Mandatory)]
        [AllowEmptyString()]
        [string]$ReturnType,
        [Parameter(Mandatory)]
        [bool]$IsBodyNullable
    )

    'Calling method: Invoke-ApiClient' | Write-Debug
    $PSBoundParameters | Out-DebugParameter | Write-Debug

    $Configuration = Get-Configuration
    $RequestUri = $Configuration["BaseUrl"] + $Uri
    $DefaultHeaders = $Configuration["DefaultHeaders"]
    # should make sure that SkipCertificateCheck is not set for PowerShell 5
    $SkipCertificateCheck = $Configuration["SkipCertificateCheck"]
    $Proxy = $Configuration["Proxy"]

    # cookie parameters
    foreach ($Parameter in $CookieParameters.GetEnumerator()) {
        if ($Parameter.Name -eq "cookieAuth") {
            $HeaderParameters["Cookie"] = $Parameter.Value
        } else {
            $HeaderParameters[$Parameter.Name] = $Parameter.Value
        }
    }
    if ($CookieParameters -and $CookieParameters.Count -gt 1) {
        Write-Warning "Multiple cookie parameters found. Currently only the first one is supported/used"
    }

    # accept, content-type headers
    $Accept = SelectHeaders -Headers $Accepts -Multiple -JsonFirst
    if ($Accept) {
        $HeaderParameters['Accept'] = $Accept
    }

    # Content-Type and multipart handling
    $ContentType = SelectHeaders -Headers $ContentTypes
    if ($ContentType) {
        $HeaderParameters['Content-Type'] = $ContentType
        if ($ContentType -eq 'multipart/form-data') {
            $MultiPart = $true
        }
    }

    # add default headers if any
    foreach ($header in $DefaultHeaders.GetEnumerator()) {
        $HeaderParameters[$header.Name] = $header.Value
    }

    # construct URL query string
    $HttpValues = [System.Web.HttpUtility]::ParseQueryString([String]::Empty)
    foreach ($Parameter in $QueryParameters.GetEnumerator()) {
        if ($Parameter.Value.Count -gt 1) { // array
            foreach ($Value in $Parameter.Value) {
                $HttpValues.Add($Parameter.Key + '[]', $Value)
            }
        } else {
            $HttpValues.Add($Parameter.Key,$Parameter.Value)
        }
    }
    # Build the request and load it with the query string.
    $UriBuilder = [System.UriBuilder]($RequestUri)
    $UriBuilder.Query = $HttpValues.ToString()

    # include form parameters in the request body
    if ($FormParameters -and $FormParameters.Count -gt 0) {
       $RequestBody = $FormParameters
    }

    if ($Body -or $IsBodyNullable) {
        $RequestBody = $Body
        if ([string]::IsNullOrEmpty($RequestBody) -and $IsBodyNullable -eq $true) {
            $RequestBody = "null"
        }
    }

    # use splatting to pass parameters
    $Params = @{}
    $Params.Uri = $UriBuilder.Uri
    $Params.Method = $Method
    $Params.Headers = $HeaderParameters
    $Params.ErrorAction = 'Stop'

    if ($SkipCertificateCheck -eq $true) {
        $Params.SkipCertificateCheck = $true
    }

    if ($null -ne $Proxy) {
        $effectiveProxy = $Proxy.GetProxy($UriBuilder.Uri)
        # do not set proxy if it is null or same as target Uri
        if ($null -ne $effectiveProxy -and $effectiveProxy.AbsoluteUri -ne $UriBuilder.Uri) {
            $Params.Proxy = $effectiveProxy.AbsoluteUri
            $Params.ProxyUseDefaultCredentials = $true
        }
    }

    # use Invoke-RestApi if Content-Type is 'multipart/form-data', Invoke-WebRequest otherwise
    if ($MultiPart) {
        if ($PSVersionTable.PSVersion.Major -eq 5) {
            # preset null return values as not supported by Invoke-RestMethod on PS5
            $ResponseHeaders = $null
            $ResponseStatusCode = $null
        } else {
            # preset return variables
            $Params.ResponseHeadersVariable = "ResponseHeaders"
            $Params.StatusCodeVariable = "ResponseStatusCode"
        }
        $Params.Form = $FormParameters
        $Response = Invoke-RestMethod @Params

        return @{
            Response = $Response
            StatusCode = $ResponseStatusCode
            Headers = $ResponseHeaders
        }
   } else {
        $Params.Body = $RequestBody
        $Params.UseBasicParsing = $true
        $Response = Invoke-WebRequest @Params

        return @{
            Response = DeserializeResponse -Response $Response.Content -ReturnType $ReturnType -ContentTypes $Response.Headers["Content-Type"]
            StatusCode = $Response.StatusCode
            Headers = $Response.Headers
        }
    }
}

# Filter MIME types for Accept:/Content-Type: headers
function SelectHeaders {
    Param(
        [Parameter(Mandatory)]
        [AllowEmptyCollection()]
        [String[]]$Headers,
        [Parameter(Mandatory=$false)]
        [switch]$Multiple,
        [Parameter(Mandatory=$false)]
        [switch]$JsonFirst
    )

    # if no MIME type is provided return null
    if (!($Headers) -or $Headers.Count -eq 0) {
        return $null
    }

    if ($Multiple) {
        # return multiple MIME types (for Accept: header)
        if ($JsonFirst) {
            # sort input to return JSON MIME types first
            $mimeHeaders = @()
            $otherHeaders = @()
            foreach ($Header in $Headers) {
                if (IsJsonMIME -MIME $Header) {
                    $mimeHeaders += $Header
                } else {
                    $otherHeaders += $Header
                }
            }
            $Headers = $($mimeHeaders; $otherHeaders)
        }
        return [string]::Join(', ', $Headers) # join multiple types if they are provided
    } else {
        foreach ($Header in $Headers) {
            if (IsJsonMIME -MIME $Header) {
                return $Header # return the first type matching a JSON MIME
            }
        }
        return $Headers[0] # else return the first one
    }
}

function IsJsonMIME {
    Param(
        [Parameter(Mandatory)]
        [string]$MIME
    )

    if ($MIME -match "(?i)^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$") {
        return $true
    } else {
        return $false
    }
}

function DeserializeResponse {
    Param(
        [Parameter(Mandatory)]
        [AllowEmptyString()]
        [string]$ReturnType,
        [Parameter(Mandatory)]
        [Object]$Response,
        [Parameter(Mandatory)]
        [AllowNull()]
        [AllowEmptyCollection()]
        [string[]]$ContentTypes
    )

    If ($null -eq $ContentTypes) {
        $ContentTypes = [string[]]@()
    }

    If ([string]::IsNullOrEmpty($ReturnType) -and $ContentTypes.Count -eq 0) { # void response
        return $Response
    } Elseif ($ReturnType -match '\[\]$') { # array
        return ConvertFrom-Json $Response
    } Elseif (@("String", "Boolean", "System.DateTime") -contains $ReturnType) { # string, boolean ,datetime
        return $Response
    } Else { # others (e.g. model, file)
        if ($ContentTypes) {
            $ContentType = $null
            if ($ContentTypes.Count -gt 1) {
                $ContentType = SelectHeaders -Headers $ContentTypes
            } else {
                $ContentType = $ContentTypes[0]
            }

            if (IsJsonMIME -MIME $ContentType) { # JSON
                return ConvertFrom-Json $Response
            } else { # XML, file, etc
                return $Response
            }
        } else { # no content type in response header, returning raw response
            return $Response
        }
    }
}

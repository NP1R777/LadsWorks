# Pagination
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Page** | **Int32** | Текущий номер страницы | [optional] 
**PerPage** | **Int32** | Элементов на странице | [optional] 
**PreviousPage** | **Int32** | Предыдущая страница | [optional] 
**NextPage** | **Int32** | Следующая страница | [optional] 
**LastPage** | **Int32** | Номер последней страницы | [optional] 
**TotalEntries** | **Int32** | Всего элементов | [optional] 

## Examples

- Prepare the resource
```powershell
$Pagination = Initialize-PSOpenAPIToolsPagination  -Page 1 `
 -PerPage 25 `
 -PreviousPage null `
 -NextPage null `
 -LastPage 1 `
 -TotalEntries 2
```

- Convert the resource to JSON
```powershell
$Pagination | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


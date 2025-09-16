# DashboardEmployeeControllerApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createEmployeeInDashboard**](#createemployeeindashboard) | **POST** /api/v1/dashboard/user/biodata/{id}/create | |
|[**updateEmployeeInDashboard**](#updateemployeeindashboard) | **PUT** /api/v1/dashboard/user/biodata/{id}/update | |

# **createEmployeeInDashboard**
> AppResponseEmployeeResponse createEmployeeInDashboard(employeeRequest)


### Example

```typescript
import {
    DashboardEmployeeControllerApi,
    Configuration,
    EmployeeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DashboardEmployeeControllerApi(configuration);

let id: string; // (default to undefined)
let employeeRequest: EmployeeRequest; //

const { status, data } = await apiInstance.createEmployeeInDashboard(
    id,
    employeeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **employeeRequest** | **EmployeeRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**AppResponseEmployeeResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateEmployeeInDashboard**
> AppResponseEmployeeResponse updateEmployeeInDashboard(employeeRequest)


### Example

```typescript
import {
    DashboardEmployeeControllerApi,
    Configuration,
    EmployeeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DashboardEmployeeControllerApi(configuration);

let id: string; // (default to undefined)
let employeeRequest: EmployeeRequest; //

const { status, data } = await apiInstance.updateEmployeeInDashboard(
    id,
    employeeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **employeeRequest** | **EmployeeRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**AppResponseEmployeeResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# EmployeeControllerApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createEmployee**](#createemployee) | **POST** /api/v1/employee/biodata/me | |
|[**getEmployee**](#getemployee) | **GET** /api/v1/employee/biodata/me | |
|[**updateEmployee**](#updateemployee) | **PUT** /api/v1/employee/biodata/me/{id} | |

# **createEmployee**
> AppResponseEmployeeResponse createEmployee(employeeRequest)


### Example

```typescript
import {
    EmployeeControllerApi,
    Configuration,
    EmployeeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new EmployeeControllerApi(configuration);

let employeeRequest: EmployeeRequest; //

const { status, data } = await apiInstance.createEmployee(
    employeeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **employeeRequest** | **EmployeeRequest**|  | |


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

# **getEmployee**
> AppResponseEmployeeResponse getEmployee()


### Example

```typescript
import {
    EmployeeControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EmployeeControllerApi(configuration);

const { status, data } = await apiInstance.getEmployee();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AppResponseEmployeeResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateEmployee**
> AppResponseEmployeeResponse updateEmployee(employeeRequest)


### Example

```typescript
import {
    EmployeeControllerApi,
    Configuration,
    EmployeeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new EmployeeControllerApi(configuration);

let id: string; // (default to undefined)
let employeeRequest: EmployeeRequest; //

const { status, data } = await apiInstance.updateEmployee(
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


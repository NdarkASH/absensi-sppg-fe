# DashboardDateControllerApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createDate**](#createdate) | **POST** /api/v1/dashboard/date | |
|[**deleteDate**](#deletedate) | **DELETE** /api/v1/dashboard/date | |
|[**getAllDate**](#getalldate) | **GET** /api/v1/dashboard/date | |
|[**getDate**](#getdate) | **PUT** /api/v1/dashboard/date/{id} | |
|[**getDateById**](#getdatebyid) | **GET** /api/v1/dashboard/date/{id} | |

# **createDate**
> AppResponseDateResponse createDate(dateRequest)


### Example

```typescript
import {
    DashboardDateControllerApi,
    Configuration,
    DateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DashboardDateControllerApi(configuration);

let dateRequest: DateRequest; //

const { status, data } = await apiInstance.createDate(
    dateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dateRequest** | **DateRequest**|  | |


### Return type

**AppResponseDateResponse**

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

# **deleteDate**
> AppResponseVoid deleteDate()


### Example

```typescript
import {
    DashboardDateControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DashboardDateControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteDate(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**AppResponseVoid**

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

# **getAllDate**
> AppResponsePagingResponseDateResponse getAllDate()


### Example

```typescript
import {
    DashboardDateControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DashboardDateControllerApi(configuration);

let startDate: string; // (optional) (default to undefined)
let endDate: string; // (optional) (default to undefined)
let page: number; //Zero-based page index (0..N) (optional) (default to 0)
let size: number; //The size of the page to be returned (optional) (default to 20)
let sort: Array<string>; //Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. (optional) (default to undefined)

const { status, data } = await apiInstance.getAllDate(
    startDate,
    endDate,
    page,
    size,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **startDate** | [**string**] |  | (optional) defaults to undefined|
| **endDate** | [**string**] |  | (optional) defaults to undefined|
| **page** | [**number**] | Zero-based page index (0..N) | (optional) defaults to 0|
| **size** | [**number**] | The size of the page to be returned | (optional) defaults to 20|
| **sort** | **Array&lt;string&gt;** | Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. | (optional) defaults to undefined|


### Return type

**AppResponsePagingResponseDateResponse**

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

# **getDate**
> AppResponseDateResponse getDate()


### Example

```typescript
import {
    DashboardDateControllerApi,
    Configuration,
    DateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DashboardDateControllerApi(configuration);

let id: string; // (default to undefined)
let request: DateRequest; // (default to undefined)

const { status, data } = await apiInstance.getDate(
    id,
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **request** | **DateRequest** |  | defaults to undefined|


### Return type

**AppResponseDateResponse**

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

# **getDateById**
> AppResponseDateResponse getDateById()


### Example

```typescript
import {
    DashboardDateControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DashboardDateControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getDateById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**AppResponseDateResponse**

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


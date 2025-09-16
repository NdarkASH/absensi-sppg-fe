# DashboardUserControllerApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createUserInDashboard**](#createuserindashboard) | **POST** /api/v1/dashboard/user/create | |
|[**deleteAllUser**](#deletealluser) | **DELETE** /api/v1/dashboard/user | |
|[**deleteUserInDashboard**](#deleteuserindashboard) | **DELETE** /api/v1/dashboard/{id} | |
|[**getAllUserInDashboard**](#getalluserindashboard) | **GET** /api/v1/dashboard | |
|[**getUserInDashboard**](#getuserindashboard) | **GET** /api/v1/dashboard/{id} | |
|[**restoreUser**](#restoreuser) | **PUT** /api/v1/dashboard/user/restore | |
|[**softDelete**](#softdelete) | **PUT** /api/v1/dashboard/user/delete | |
|[**updateUserInDashboard**](#updateuserindashboard) | **PUT** /api/v1/dashboard/{id}/update/user | |

# **createUserInDashboard**
> AppResponseUserResponse createUserInDashboard(userRequest)


### Example

```typescript
import {
    DashboardUserControllerApi,
    Configuration,
    UserRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DashboardUserControllerApi(configuration);

let userRequest: UserRequest; //

const { status, data } = await apiInstance.createUserInDashboard(
    userRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userRequest** | **UserRequest**|  | |


### Return type

**AppResponseUserResponse**

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

# **deleteAllUser**
> AppResponseVoid deleteAllUser()


### Example

```typescript
import {
    DashboardUserControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DashboardUserControllerApi(configuration);

const { status, data } = await apiInstance.deleteAllUser();
```

### Parameters
This endpoint does not have any parameters.


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

# **deleteUserInDashboard**
> AppResponseVoid deleteUserInDashboard()


### Example

```typescript
import {
    DashboardUserControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DashboardUserControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteUserInDashboard(
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

# **getAllUserInDashboard**
> AppResponseListDashboardResponse getAllUserInDashboard()


### Example

```typescript
import {
    DashboardUserControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DashboardUserControllerApi(configuration);

let status: boolean; // (optional) (default to undefined)
let page: number; //Zero-based page index (0..N) (optional) (default to 0)
let size: number; //The size of the page to be returned (optional) (default to 20)
let sort: Array<string>; //Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. (optional) (default to undefined)

const { status, data } = await apiInstance.getAllUserInDashboard(
    status,
    page,
    size,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **status** | [**boolean**] |  | (optional) defaults to undefined|
| **page** | [**number**] | Zero-based page index (0..N) | (optional) defaults to 0|
| **size** | [**number**] | The size of the page to be returned | (optional) defaults to 20|
| **sort** | **Array&lt;string&gt;** | Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. | (optional) defaults to undefined|


### Return type

**AppResponseListDashboardResponse**

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

# **getUserInDashboard**
> AppResponseDashboardResponse getUserInDashboard()


### Example

```typescript
import {
    DashboardUserControllerApi,
    Configuration,
    Pageable
} from './api';

const configuration = new Configuration();
const apiInstance = new DashboardUserControllerApi(configuration);

let id: string; // (default to undefined)
let pageable: Pageable; // (default to undefined)

const { status, data } = await apiInstance.getUserInDashboard(
    id,
    pageable
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **pageable** | **Pageable** |  | defaults to undefined|


### Return type

**AppResponseDashboardResponse**

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

# **restoreUser**
> AppResponseUserResponse restoreUser()


### Example

```typescript
import {
    DashboardUserControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DashboardUserControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.restoreUser(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**AppResponseUserResponse**

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

# **softDelete**
> AppResponseUserResponse softDelete()


### Example

```typescript
import {
    DashboardUserControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DashboardUserControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.softDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**AppResponseUserResponse**

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

# **updateUserInDashboard**
> AppResponseDashboardResponse updateUserInDashboard(dashboardRequest)


### Example

```typescript
import {
    DashboardUserControllerApi,
    Configuration,
    DashboardRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DashboardUserControllerApi(configuration);

let id: string; // (default to undefined)
let dashboardRequest: DashboardRequest; //
let page: number; //Zero-based page index (0..N) (optional) (default to 0)
let size: number; //The size of the page to be returned (optional) (default to 20)
let sort: Array<string>; //Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. (optional) (default to undefined)

const { status, data } = await apiInstance.updateUserInDashboard(
    id,
    dashboardRequest,
    page,
    size,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dashboardRequest** | **DashboardRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|
| **page** | [**number**] | Zero-based page index (0..N) | (optional) defaults to 0|
| **size** | [**number**] | The size of the page to be returned | (optional) defaults to 20|
| **sort** | **Array&lt;string&gt;** | Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. | (optional) defaults to undefined|


### Return type

**AppResponseDashboardResponse**

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


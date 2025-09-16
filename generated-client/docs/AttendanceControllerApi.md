# AttendanceControllerApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAllAttendanceByUserId**](#getallattendancebyuserid) | **GET** /api/v1/attendance | |
|[**getAttendanceById**](#getattendancebyid) | **GET** /api/v1/attendance/{id} | |
|[**uploadAttendance**](#uploadattendance) | **POST** /api/v1/attendance/date/{id} | |

# **getAllAttendanceByUserId**
> AppResponsePagingResponseAttendanceResponse getAllAttendanceByUserId()


### Example

```typescript
import {
    AttendanceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AttendanceControllerApi(configuration);

let page: number; //Zero-based page index (0..N) (optional) (default to 0)
let size: number; //The size of the page to be returned (optional) (default to 20)
let sort: Array<string>; //Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. (optional) (default to undefined)

const { status, data } = await apiInstance.getAllAttendanceByUserId(
    page,
    size,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | Zero-based page index (0..N) | (optional) defaults to 0|
| **size** | [**number**] | The size of the page to be returned | (optional) defaults to 20|
| **sort** | **Array&lt;string&gt;** | Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. | (optional) defaults to undefined|


### Return type

**AppResponsePagingResponseAttendanceResponse**

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

# **getAttendanceById**
> AppResponseAttendanceResponse getAttendanceById()


### Example

```typescript
import {
    AttendanceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AttendanceControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getAttendanceById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**AppResponseAttendanceResponse**

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

# **uploadAttendance**
> AppResponseAttendanceResponse uploadAttendance(attendanceCreateRequest)


### Example

```typescript
import {
    AttendanceControllerApi,
    Configuration,
    AttendanceCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AttendanceControllerApi(configuration);

let id: string; // (default to undefined)
let attendanceCreateRequest: AttendanceCreateRequest; //

const { status, data } = await apiInstance.uploadAttendance(
    id,
    attendanceCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attendanceCreateRequest** | **AttendanceCreateRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**AppResponseAttendanceResponse**

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


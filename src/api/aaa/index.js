/*
 * @Author: Etongfu
 * @Email: 13583254085@163.com
 * @Date: 2019-06-18 17:00:16
 * @Description: bbb
 */
import http from '@/utils/http'

export function demo(data) {
  return http({
    method: 'post',
    url: '/',
    data
  })
}

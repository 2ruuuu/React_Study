import api from "@/lib/axios";
import {TodoItem} from "./type";

// 항목 등록
export const postItems = async (name: string) => {
  const {data} = await api.post<TodoItem>("/items", {name});
  return data;
};

// 항목 목록 조회
export const getItems = async (page = 1, pageSize = 10) => {
  const {data} = await api.get<TodoItem[]>("/items", {
    params: {page, pageSize},
  });
  return data;
};

// 항목 상세 조회
export const getItemsDetail = async () => {};

// 항목 수정
export const patchItemsDetail = async (
  itemId: number,
  body: {
    name?: string;
    memo?: string;
    imageUrl?: string;
    isCompleted?: boolean;
  },
) => {
  const {data} = await api.patch(`/items/${itemId}`, body);
  return data;
};

// 항목 삭제
export const deleteItemsDetail = async () => {};

// 이미지 업로드
export const postImagesUpload = async () => {};

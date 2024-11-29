import { createAsyncThunk } from "@reduxjs/toolkit";
import { DataController, RequestArgs } from "../api/DataController";

const dataController = new DataController();

export const createNewPage = createAsyncThunk("createNewPage", async (arg: RequestArgs) => {
  const pageInfo = await dataController.createNewPage(arg.title);

  return pageInfo;
});

export const getAllPages = createAsyncThunk("getAllPages", async () => {
  const pageInfo = await dataController.getAllPages();

  return pageInfo;
});


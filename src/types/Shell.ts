import { AppId } from './App';
import { FileTypeId } from '../data/fileTypeList';
import { IconId } from '../data/iconList';
import { FileSystemDir, FileSystemFile } from './FileSystem';

export type ShellItemType = 'app' | 'dir' | 'file';
export type ShellItem = ShellApp | ShellDir | ShellFile;

export interface ShellApp {
  appId: AppId;
  hasFocus: boolean;
  hasSoftFocus: boolean;
  iconId: IconId;
  id: string;
  name: string;
  type: 'app';
}

export interface ShellDir {
  fileSystemDir: FileSystemDir;
  hasFocus: boolean;
  hasSoftFocus: boolean;
  iconId: IconId;
  id: string;
  name: string;
  type: 'dir';
}

export interface ShellFile {
  fileSystemFile: FileSystemFile;
  fileTypeId: FileTypeId;
  iconId: IconId;
  id: string;
  hasFocus: boolean;
  hasSoftFocus: boolean;
  name: string;
  type: 'file';
}

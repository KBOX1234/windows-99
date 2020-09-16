import { FunctionComponent } from 'preact';
import { FileSystemDir, FileSystemFile } from './filesystem';
import { IconId } from './iconList';
import ExplorerApp from '../components/apps/ExplorerApp/ExplorerApp';
import MyComputerApp from '../components/apps/MyComputerApp/MyComputerApp'; // } //   Props as MyComputerAppProps, // , {
import { ContextType as OpenWindowsContextType } from '../context/OpenWindowsContext';
import NotepadApp from '../components/apps/NotepadApp/NotepadApp';

export interface AppProps {
  addWindow: OpenWindowsContextType['addWindow'];
  workingDir?: FileSystemDir;
  workingFile?: FileSystemFile;
}

export type App<T> = {
  component: FunctionComponent<AppProps> | null;
  id: T;
  iconId: IconId;
  name: string;
};

export type AppList = { [key in AppId]: App<key> };

export type AppId =
  | 'binEmpty'
  | 'binFull'
  | 'briefcase'
  | 'calc'
  | 'cdDrive'
  | 'cdPlayer'
  | 'controlPanel'
  | 'defrag'
  | 'dialUpNetwork'
  | 'exchange'
  | 'explorer'
  | 'find'
  | 'findComputer'
  | 'findMsn'
  | 'floppyDrive'
  | 'hardDrive'
  | 'help'
  | 'hyperterminal'
  | 'mediaPlayer'
  | 'msn'
  | 'msDos'
  | 'msPaint'
  | 'myComputer'
  | 'networkNeighborhood'
  | 'notepad'
  | 'phoneDialer'
  | 'printers'
  | 'register'
  | 'run'
  | 'scandisk'
  | 'shutdown'
  | 'soundRecorder'
  | 'taskbar'
  | 'volumeControl'
  | 'wordpad';

export const appList: AppList = {
  binEmpty: {
    component: null,
    id: 'binEmpty',
    iconId: 'binEmpty',
    name: 'Recycle Bin',
  },
  binFull: {
    component: null,
    id: 'binFull',
    iconId: 'binFull',
    name: 'Recycle Bin',
  },
  briefcase: {
    component: null,
    id: 'briefcase',
    iconId: 'briefcase',
    name: 'My Briefcase',
  },
  calc: { component: null, id: 'calc', iconId: 'calc', name: 'Calculator' },
  cdDrive: {
    component: null,
    id: 'cdDrive',
    iconId: 'cdDrive',
    name: '(D:)',
  },
  cdPlayer: {
    component: null,
    id: 'cdPlayer',
    iconId: 'cdPlayer',
    name: 'CD Player',
  },
  controlPanel: {
    component: null,
    id: 'controlPanel',
    iconId: 'controlPanel',
    name: 'Control Panel',
  },
  defrag: {
    component: null,
    id: 'defrag',
    iconId: 'defrag',
    name: 'Disk Defragmenter',
  },
  dialUpNetwork: {
    component: null,
    id: 'dialUpNetwork',
    iconId: 'dialUpNetwork',
    name: 'Dial-Up Networking',
  },
  exchange: {
    component: null,
    id: 'exchange',
    iconId: 'exchange',
    name: 'Microsoft Exchange',
  },
  explorer: {
    component: ExplorerApp,
    id: 'explorer',
    iconId: 'explorer',
    name: 'Windows Explorer',
  },
  find: {
    component: null,
    id: 'find',
    iconId: 'find',
    name: 'Find Files or Folders... ',
  },
  findComputer: {
    component: null,
    id: 'findComputer',
    iconId: 'findComputer',
    name: 'Find Computer...',
  },
  findMsn: {
    component: null,
    id: 'findMsn',
    iconId: 'findMsn',
    name: 'Find on The Microsoft Network',
  },
  floppyDrive: {
    component: null,
    id: 'floppyDrive',
    iconId: 'floppyDrive',
    name: '3½ Floppy (A:)',
  },
  hardDrive: {
    component: null,
    id: 'hardDrive',
    iconId: 'hardDrive',
    name: '(C:)',
  },
  help: { component: null, id: 'help', iconId: 'help', name: 'Help' },
  hyperterminal: {
    component: null,
    id: 'hyperterminal',
    iconId: 'hyperterminal',
    name: 'Hyper Terminal',
  },
  mediaPlayer: {
    component: null,
    id: 'mediaPlayer',
    iconId: 'mediaPlayer',
    name: 'Media Player',
  },
  msn: {
    component: null,
    id: 'msn',
    iconId: 'msn',
    name: 'The Microsoft Network',
  },
  msDos: {
    component: null,
    id: 'msDos',
    iconId: 'msDos',
    name: 'MS-DOS Prompt',
  },
  msPaint: {
    component: null,
    id: 'msPaint',
    iconId: 'msPaint',
    name: 'Paint',
  },
  myComputer: {
    component: MyComputerApp,
    id: 'myComputer',
    iconId: 'myComputer',
    name: 'My Computer',
  },
  networkNeighborhood: {
    component: null,
    id: 'networkNeighborhood',
    iconId: 'network',
    name: 'Network Neighborhood',
  },
  notepad: {
    component: NotepadApp,
    id: 'notepad',
    iconId: 'notepad',
    name: 'Notepad',
  },
  phoneDialer: {
    component: null,
    id: 'phoneDialer',
    iconId: 'phoneDialer',
    name: 'Phone Dialer',
  },
  printers: {
    component: null,
    id: 'printers',
    iconId: 'printers',
    name: 'Printers',
  },
  register: {
    component: null,
    id: 'register',
    iconId: 'register',
    name: 'Online Registration',
  },
  run: { component: null, id: 'run', iconId: 'run', name: 'Run' },
  scandisk: {
    component: null,
    id: 'scandisk',
    iconId: 'scandisk',
    name: 'ScanDisk',
  },
  soundRecorder: {
    component: null,
    id: 'soundRecorder',
    iconId: 'sound',
    name: 'Sound Recorder',
  },
  shutdown: {
    component: null,
    id: 'shutdown',
    iconId: 'shutdown',
    name: 'Shutdown...',
  },
  taskbar: {
    component: null,
    id: 'taskbar',
    iconId: 'taskbar',
    name: 'Taskbar...',
  },
  volumeControl: {
    component: null,
    id: 'volumeControl',
    iconId: 'volume',
    name: 'Volume Control',
  },
  wordpad: {
    component: null,
    id: 'wordpad',
    iconId: 'wordpad',
    name: 'WordPad',
  },
};

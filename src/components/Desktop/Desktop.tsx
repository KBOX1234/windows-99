import { h, FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';

import { appList } from '../../data/appList';
import FileGrid, { GridFile } from '../FileGrid/FileGrid';

import style from './Desktop.css';

interface Props {
  background?: string;
}

const Desktop: FunctionComponent<Props> = ({
  background = 'lightseagreen',
}: Props) => {
  const [files, setFiles] = useState<GridFile[]>([
    {
      id: appList.myComputer.id,
      iconId: appList.myComputer.iconId,
      hasFocus: false,
      hasSoftFocus: true,
      name: appList.myComputer.name,
      type: 'app',
    },
    {
      id: appList.networkNeighborhood.id,
      iconId: appList.networkNeighborhood.iconId,
      hasFocus: false,
      hasSoftFocus: false,
      name: appList.networkNeighborhood.name,
      type: 'app',
    },
    {
      id: appList.briefcase.id,
      iconId: appList.briefcase.iconId,
      hasFocus: false,
      hasSoftFocus: false,
      name: appList.briefcase.name,
      type: 'app',
    },
    {
      id: appList.binEmpty.id,
      iconId: appList.binEmpty.iconId,
      hasFocus: false,
      hasSoftFocus: false,
      name: appList.binEmpty.name,
      type: 'app',
    },
  ]);

  const handleOnClick = () => {
    setFiles(
      files.map((file) => ({
        ...file,
        hasFocus: false,
        hasSoftFocus: file.hasFocus,
      }))
    );
  };

  const handleOnClickFile = (
    fileId: string,
    fileType: string,
    e: MouseEvent
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setFiles(
      files.map((file) => ({
        ...file,
        hasFocus: file.type === fileType && file.id === fileId,
        hasSoftFocus: file.type === fileType && file.id === fileId,
      }))
    );
  };

  return (
    <div
      className={style.desktop}
      onClick={handleOnClick}
      style={{ background }}
    >
      <FileGrid
        direction="column"
        files={files}
        onClickFile={handleOnClickFile}
        onDblClickFile={() => console.log('db click')}
      />
    </div>
  );
};

export default Desktop;

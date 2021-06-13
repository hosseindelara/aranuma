
import AppsIcon from '@material-ui/icons/Apps';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';

import { Button, ButtonGroup } from '@material-ui/core'

type propsCheck = {
    handelShowitem: Function
}

export default function DisPlayuser({ handelShowitem }: propsCheck): JSX.Element {
    return (
        <div>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button onClick={() => handelShowitem(1)} ><AppsIcon /> </Button>
                <Button onClick={() => handelShowitem(2)}><ArtTrackIcon /></Button>
            </ButtonGroup>
        </div>
    )
}

import {Injectable} from '@angular/core';

function _window(): any{
    return window;
}
function _isMobile(): any{
    return window.screen.width < 768;

}

@Injectable()
export class WindowRef {
    get nativeWindow(): any{
        return _window();
    }
    get isMobile(): boolean{
        return _isMobile();
    }
}
import { InjectionToken } from "@angular/core";

export const APP_SESSION_STORAGE = new InjectionToken<Storage>('app.session_storage');
export const APP_LOCAL_STORAGE = new InjectionToken<Storage>('app.local_storage');

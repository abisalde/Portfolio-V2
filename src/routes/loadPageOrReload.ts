const RELOADED_AFTER_DEPLOY = 'reloaded-after-deploy';

function sessionStorageIfAllowed() {
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

export async function loadPageOrReload<Page>(
  path: string,
  load: () => Promise<Page>,
) {
  const storage = sessionStorageIfAllowed();
  try {
    const page = await load();
    storage?.removeItem(RELOADED_AFTER_DEPLOY);
    return page;
  } catch (error) {
    if (!storage || storage.getItem(RELOADED_AFTER_DEPLOY)) throw error;
    storage.setItem(RELOADED_AFTER_DEPLOY, 'true');
    window.location.assign(path);
    return new Promise<never>(() => {});
  }
}

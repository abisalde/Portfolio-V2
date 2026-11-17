const RELOADED_AFTER_DEPLOY = 'reloaded-after-deploy';

export async function loadPageOrReload<Page>(
  path: string,
  load: () => Promise<Page>,
) {
  try {
    const page = await load();
    sessionStorage.removeItem(RELOADED_AFTER_DEPLOY);
    return page;
  } catch (error) {
    if (sessionStorage.getItem(RELOADED_AFTER_DEPLOY)) throw error;
    sessionStorage.setItem(RELOADED_AFTER_DEPLOY, 'true');
    window.location.assign(path);
    return new Promise<never>(() => {});
  }
}

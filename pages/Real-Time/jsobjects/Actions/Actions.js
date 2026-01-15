export default {
  async afterSaveRefresh() {
    await refreshAdsetConfig.run();
    await getSnapshot.run();
  }
}
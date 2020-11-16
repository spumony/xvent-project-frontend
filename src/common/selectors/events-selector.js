export const getEventsSelector = (state) => state.events?.items || [];
export const getEventsLoadingSelector = (state) =>
  state.events?.loading || false;
export const getEventSelector = (state, props) => {
  if (!state.events?.items) {
    return {};
  }

  const item = state.events.items.find((el) => el._id === props.id);
  return item || {};
};
export const getParticipantStatus = (state) => state.events?.participant_status || {};
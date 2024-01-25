import { sendNotice } from '../toast/toast.js';
import { assetInteractionModel } from '../../scripts/analytics/lib-analytics.js';

const attachCopyLink = (selector, target, info) => {
  if (selector) {
    selector.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(target);
      sendNotice(info);
      assetInteractionModel(null,'Copy');
    });
  }
};

export default attachCopyLink;

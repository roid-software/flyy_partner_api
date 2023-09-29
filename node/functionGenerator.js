import HttpRequest from './httpRequests.js';

const functionArray = [
    {
        "method": "get",
        "route": "v1/:partner/events",
        "functionName": "v1_partner_events"
    },
    {
        "method": "post",
        "route": "v1/:partner/user_event",
        "functionName": "v1_partner_user_event"
    },
    {
        "method": "post",
        "route": "v1/:partner/user_previous_event",
        "functionName": "v1_partner_user_previous_event"
    },
    {
        "method": "post",
        "route": "v2/:partner/user_event",
        "functionName": "v2_partner_user_event"
    },
    {
        "method": "post",
        "route": "v3/:partner/user_event",
        "functionName": "v3_partner_user_event"
    },
    {
        "method": "post",
        "route": "v4/:partner/multi_reward_event",
        "functionName": "v4_partner_multi_reward_event"
    },
    {
        "method": "post",
        "route": "v5/:partner/user_event",
        "functionName": "v5_partner_user_event"
    },
    {
        "method": "post",
        "route": "protected_apis/:partner/yNM11",
        "functionName": "protected_apis_partner_yNM11"
    },
    {
        "method": "post",
        "route": "v1/:partner/leaderboard_event",
        "functionName": "v1_partner_leaderboard_event"
    },
    {
        "method": "get",
        "route": "v1/:partner/live_leaderboards",
        "functionName": "v1_partner_live_leaderboards"
    },
    {
        "method": "get",
        "route": "v1/:partner/referral_history",
        "functionName": "v1_partner_referral_history"
    },
    {
        "method": "get",
        "route": "v1/:partner/user/:ext_uid/referral_history",
        "functionName": "v1_partner_user_referral_history"
    },
    {
        "method": "get",
        "route": "v1/:partner/user/:ext_uid/referral_data",
        "functionName": "v1_partner_user_referral_data"
    },
    {
        "method": "get",
        "route": "v1/:partner/verify_referrer_code/:referrer_code",
        "functionName": "v1_partner_verify_referrer_code"
    },
    {
        "method": "get",
        "route": "v1/:partner/user/:ext_uid/user_token",
        "functionName": "v1_partner_user_token"
    },
    {
        "method": "get",
        "route": "v1/:partner/user/:user_token/get_user_by_token",
        "functionName": "v1_partner_user_get_user_by_token"
    },
    {
        "method": "put",
        "route": "v1/:partner/partner_user/update_referrer",
        "functionName": "v1_partner_partner_user_update_referrer"
    },
    {
        "method": "post",
        "route": "v1/:partner/partner_user/pending_rewards",
        "functionName": "v1_partner_partner_user_pending_rewards"
    },
    {
        "method": "put",
        "route": "v1/update_fingerprint",
        "functionName": "v1_update_fingerprint"
    },
    {
        "method": "post",
        "route": "v1/:partner/user/:ext_user_id/user_token",
        "functionName": "v1_partner_user_ext_user_id_user_token"
    },
    {
        "method": "post",
        "route": "v2/:partner/user/:ext_user_id/user_token",
        "functionName": "v2_partner_user_ext_user_id_user_token"
    },
    {
        "method": "post",
        "route": "v1/:partner/stage-user",
        "functionName": "v1_partner_stage_user"
    },
    {
        "method": "get",
        "route": "v1/:partner/user/:ext_user_id/user_events",
        "functionName": "v1_partner_user_ext_user_id_user_events"
    },
    {
        "method": "get",
        "route": "v1/:partner/user/:ext_user_id/user_segments",
        "functionName": "v1_partner_user_ext_user_id_user_segments"
    },
    {
        "method": "post",
        "route": "v1/:partner/user/:ext_user_id/add_segment",
        "functionName": "v1_partner_user_ext_user_id_add_segment"
    },
    {
        "method": "post",
        "route": "v1/:partner/user/:ext_user_id/remove_segment",
        "functionName": "v1_partner_user_ext_user_id_remove_segment"
    },
    {
        "method": "get",
        "route": "v1/:partner/get_segments",
        "functionName": "v1_partner_get_segments"
    },
    {
        "method": "put",
        "route": "v1/:partner/segments/:id",
        "functionName": "v1_partner_segments_id"
    },
    {
        "method": "post",
        "route": "v1/:partner/segments",
        "functionName": "v1_partner_segments"
    },
    {
        "method": "delete",
        "route": "v1/:partner/segments/:segment_id",
        "functionName": "v1_partner_segments_segment_id"
    },
    {
        "method": "post",
        "route": "v1/:partner/user",
        "functionName": "v1_partner_user"
    },
    {
        "method": "get",
        "route": "v1/:partner/user/:ext_uid",
        "functionName": "v1_partner_user_ext_uid"
    },
    {
        "method": "post",
        "route": "v1/:partner/users/reset_users",
        "functionName": "v1_partner_users_reset_users"
    },
    {
        "method": "post",
        "route": "v1/:partner/user/:ext_uid/properties",
        "functionName": "v1_partner_user_ext_uid_properties"
    },
    {
        "method": "put",
        "route": "v1/:partner/user/:ext_uid/validate_referrer",
        "functionName": "v1_partner_user_ext_uid_validate_referrer"
    },
    {
        "method": "get",
        "route": "v1/:partner/user/:ext_uid/validate_device",
        "functionName": "v1_partner_user_ext_uid_validate_device"
    },
    {
        "method": "put",
        "route": "v1/:partner/user/:ext_uid/update_referral_code/:referral_code",
        "functionName": "v1_partner_user_ext_uid_update_referral_code"
    },
    {
        "method": "get",
        "route": "v1/:partner/segments/:segment_key",
        "functionName": "v1_partner_segments_segment_key"
    },
    {
        "method": "get",
        "route": "v1/:partner/user/:ext_uid/referral_link",
        "functionName": "v1_partner_user_ext_uid_referral_link"
    },
    {
        "method": "put",
        "route": "v1/:partner/partner_user/update_firebase_token",
        "functionName": "v1_partner_partner_user_update_firebase_token"
    },
    {
        "method": "get",
        "route": "v1/:partner/user/:ext_uid/offers",
        "functionName": "v1_partner_user_ext_uid_offers"
    },
    {
        "method": "get",
        "route": "v1/:partner/user/:ext_uid/partner_offers_sh",
        "functionName": "v1_partner_user_ext_uid_partner_offers_sh"
    },
    {
        "method": "get",
        "route": "v1/:partner/toggle_direct_credit/:offer_id",
        "functionName": "v1_partner_toggle_direct_credit_offer_id"
    },
    {
        "method": "post",
        "route": "v1/:partner/variants",
        "functionName": "v1_partner_variants"
    },
    {
        "method": "put",
        "route": "v1/:partner/variants/:id",
        "functionName": "v1_partner_variants_id"
    },
    {
        "method": "get",
        "route": "v1/:partner/variants/:id",
        "functionName": "v1_partner_variants_id"
    },
    {
        "method": "post",
        "route": "v1/:partner/log_web_event",
        "functionName": "v1_partner_log_web_event"
    },
    {
        "method": "get",
        "route": "v1/:partner/tournament_details",
        "functionName": "v1_partner_tournament_details"
    },
    {
        "method": "put",
        "route": "v1/:partner/scratch_cards/:ref_num/expire",
        "functionName": "v1_partner_scratch_cards_ref_num_expire"
    },
    {
        "method": "put",
        "route": "v1/:partner/offer/:offer_id/expire",
        "functionName": "v1_partner_offer_offer_id_expire"
    },
    {
        "method": "post",
        "route": "v1/:partner/leaderboard/:leaderboard_id/user/:ext_uid/add_score",
        "functionName": "v1_partner_leaderboard_leaderboard_id_ext_uid_add_score"
    },
    {
        "method": "get",
        "route": "v1/:partner/user/:ext_uid/scratch_card_counts",
        "functionName": "v1_partner_user_ext_uid_scratch_card_counts"
    },
    {
        "method": "get",
        "route": "v1/:partner/toggle_vouchers",
        "functionName": "v1_partner_toggle_vouchers"
    },
    {
        "method": "post",
        "route": "v1/:partner/create_user_account",
        "functionName": "v1_partner_create_user_account"
    },
    {
        "method": "get",
        "route": "v1/:partner/trigger_reward_expiry",
        "functionName": "v1_partner_trigger_reward_expiry"
    }
];

function generateFunctions(partnerKey,headers,env) {
  const https = new HttpRequest(partnerKey,headers);
  let generatedFunctions = {};

  const baseURL =  `https://${env.toLowerCase() === "stage" ? "stage-" : ""}partner-api.theflyy.com`
  functionArray.forEach((func) => {
    const {  method, route, functionName } = func;
    generatedFunctions[functionName] = (data) => {
      const url = `${baseURL}/${route.replace(':partner', partnerKey)}`; // Modify URL based on your requirements
      console.log(url);
      return https.makeRequest(url, method, data);
    };
  });
  return generatedFunctions;
}

export default generateFunctions;

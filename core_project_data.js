/**
 * Core Project Data Structure
 * tasks : 프로젝트명
 * dept : 책임부서
 * category : RFG, RFM, Controller, EVC
 * model: 대상제품모델
 * target : 최종프로젝트 종료 목표
 * phase_0_plan / close : 기획단계 일정
 * phase_1_plan / close : 제품개발 및 검증평가 일정
 * JDP_plan / close : 장비사평가 일정
 * Status : 현재 상태 (On Track, Delayed, Critical, Completed)
 * Note : 이슈사항
 */
window.coreProjectData = [
    {
        "tasks": "LDMOS Alternative Development",
        "dept": "R&D",
        "category": "RFG",
        "model": "APG-2012HD, AGL-1004HD",
        "target": "2026-07-30",
        "phase_0_plan": "2026-01-10",
        "phase_0_close": "2026-01-10",
        "phase_1_plan": "2026-03-30",
        "phase_1_close": "",
        "JDP_plan": "2026-12-30",
        "JDP_close": "",
        "status": "On Track",
        "note": "SCR21 - EOL"
    },

    {
        "tasks": "LDMOS 인상분 제품가 조정안 반영",
        "dept": "영업1팀",
        "category": "RFG",
        "model": "거래 전 제품",
        "target": "2026-01-30",
        "phase_0_plan": "2026-01-09",
        "phase_0_close": "2026-01-08",
        "phase_1_plan": "2026-01-12",
        "phase_1_close": "2026-01-09",
        "JDP_plan": "2026-01-30",
        "JDP_close": "",
        "status": "On Track",
        "note": "Reviewing Official Letter By ASM Kristy"
    },

    {
        "tasks": "Arius JQCM 60M RFG CIP (Robust Product x4U)",
        "dept": "R&D",
        "category": "RFG",
        "model": "APG-2060HG (Need to Assign Model Name)",
        "target": "2026-03-30",
        "phase_0_plan": "2026-01-15",
        "phase_0_close": "2026-01-13",
        "phase_1_plan": "2026-03-21",
        "phase_1_close": "",
        "JDP_plan": "2026-05-30",
        "JDP_close": "",
        "status": "On Track",
        "note": "모델명 선정 필요, 명절 전 견적제출 필요"
    },

    {
        "tasks": "Arius JQCM 60M RFM M to M 산포개선",
        "dept": "R&D",
        "category": "RFM",
        "model": "AFD6004-AAJ R3",
        "target": "2026-03-30",
        "phase_0_plan": "2026-01-15",
        "phase_0_close": "",
        "phase_1_plan": "2026-03-21",
        "phase_1_close": "",
        "JDP_plan": "2026-05-30",
        "JDP_close": "",
        "status": "On Track",
        "note": "평가방안 ?"
    }
];

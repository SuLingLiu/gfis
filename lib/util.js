'use strict';
var fis = require('fis3');
var path = require('path');
var defaults = require('../config/defaults.js');

/**
 * gfis�����༯��
 */
var _ = module.exports;

/**
 * ��ȡ�����ļ�������
 * @return {String} �����ļ�������
 */
_.getConfigFilename = function() {
    return 'gfe-config.json';
};

/**
 * ��ȡ��Ŀ�ĸ��ļ���(build/project/xxx)
 * @return {String} ��Ŀ�ĸ��ļ���
 */
_.getProjectRootFolder = function() {
    return 'project';
};

/**
 * ��ȡcdn�ĸ��ļ���(build/cdn/xxx)
 * @return {String} cdn�ĸ��ļ���
 */
_.getCdnRootFolder = function() {
    return 'cdn';
};

/**
 * ��ȡ�������ļ�������
 * @return {String} �����ļ�������
 */
_.getReleaseRootFolder = function() {
    return 'build';
};

/**
 * ��ȡ�����ļ�����
 */
_.getConfig = function() {
    var config = defaults;
    var gfeConfigPath = path.join(process.cwd(), _.getConfigFilename());
    if (fis.util.exists(gfeConfigPath)) {
        var gfeConfig = fis.util.readJSON(gfeConfigPath);
        config = fis.util.merge(config, gfeConfig);
    } else {
        fis.util.write(gfeConfigPath, JSON.stringify(config, null, 4), 'utf-8');
    }

    return config;
};

/**
 * ��ĿsvnĿ¼
 */
_.getSvnUrl = function(){
    var svnPath = {
        "trunk":"https://repo.ds.gome.com.cn:8443/svn/atg_poc/30_Coding/NewDevMode/trunk/gome-gfe",
        "branch":"https://repo.ds.gome.com.cn:8443/svn/atg_poc/30_Coding/NewDevMode/branches/gome-gfe",
        "tag":"https://repo.ds.gome.com.cn:8443/svn/atg_poc/30_Coding/NewDevMode/tags/gome-gfe"
    };
    return svnPath;
};

/**
 * ��ȡwidget��svn��ַ
 */
_.getWidgetSvnUrl = function(){
    return 'https://repo.ds.gome.com.cn:8443/svn/atg_poc/30_Coding/gome-gfe/gfe-widget';
};

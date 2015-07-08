/*
 EPUBReader Firefox Extension: http://www.epubread.com/
 Copyright (C) 2014 Michael Volz (epubread@gmail.com)

 This program is free software: you can redistribute it under
 the terms of the attached license (license.txt).

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 attached license (license.txt) for more details.

 You should have received a copy of the license (license.txt)
 along with this program. If not, see <http://www.epubread.com/license/>.
*/
var b=Components.interfaces,n=Components.classes,q=Components.utils,EXPORTED_SYMBOLS=["EpubreaderConverter"];q.import("resource://gre/modules/Services.jsm");q.import("resource://gre/modules/XPCOMUtils.jsm");function EpubreaderConverter(){}
EpubreaderConverter.prototype={QueryInterface:XPCOMUtils.generateQI([b.nsISupports,b.nsIStreamConverter,b.nsIStreamListener,b.nsIRequestObserver,b.nsIContentSniffer]),e:-7,d:-8,f:-9,data:null,c:null,a:null,openFrom:null,currentUri:null,getMIMETypeFromContent:function(a,h){if(a instanceof b.nsIHttpChannel){var e=a.QueryInterface(b.nsIChannel).QueryInterface(b.nsIHttpChannel);try{var c=a.QueryInterface(b.nsIChannel).URI.spec,d=!1;try{var l=e.getResponseHeader("Content-Type")}catch(f){}if(l&&l.match(/application\/epub\+zip/g))d=
!0;else if(c.match(/.*[^=]\.epub$/g))d=!0;else{try{var k=e.getResponseHeader("Content-Disposition")}catch(g){}k&&k.match(/.*\.epub/g)&&(d=!0)}var m;if(m=d)a:if(59>h.length)m=!1;else{c=[109,105,109,101,116,121,112,101,97,112,112,108,105,99,97,116,105,111,110,47,101,112,117,98,43,122,105,112];for(d=0;d<c.length;d++)if(h[d+30]!=c[d]){m=!1;break a}m=!0}if(m){try{var k=e.getResponseHeader("Content-Disposition"),p=k.match(/(.*;.*)(filename.*)/i),k="";p&&p[2]&&(k=p[2]);e.setResponseHeader("Content-Disposition",
k,!1)}catch(t){}return"application/epub+zip"}}catch(v){}}else if(a instanceof b.nsIFileChannel&&(c=a.QueryInterface(b.nsIChannel).URI.spec,c.match(/.*\.epub$/g)))return c=n["@mozilla.org/childprocessmessagemanager;1"].getService(b.nsISyncMessageSender).sendSyncMessage("Epubreader:getCurrentUri"),EpubreaderConverter.currentUri=c,EpubreaderConverter.openFrom="local","application/epub+zip"},convert:function(a){return a},asyncConvertData:function(a,h,e){this.c=e},onDataAvailable:function(a,h,e,c,d){a=
n["@mozilla.org/binaryinputstream;1"].createInstance(b.nsIBinaryInputStream);a.setInputStream(e);this.data+=a.readBytes(d)},onStartRequest:function(a,h){a instanceof b.nsIHttpChannel&&(EpubreaderConverter.currentUri="",EpubreaderConverter.openFrom="web");this.data="";this.charset=a.QueryInterface(b.nsIChannel).contentCharset||"UTF-8";this.a=a;this.a.contentType="text/html";this.a.contentCharset="UTF-8";this.a instanceof b.nsIHttpChannel&&a.QueryInterface(b.nsIChannel).QueryInterface(b.nsIHttpChannel).setResponseHeader("Content-Disposition",
"",!1);this.c.onStartRequest(this.a,h)},onStopRequest:function(a,h,e){var c={e:-7,d:-8,f:-9,get:function(a){if(a.code==this.d){var c=this.b("core.error.not_authorized");a=""}else a.code==this.e?(c=this.b("core.error.not_found"),a=""):a.code==this.f?(c=this.b("core.error.http_status"),a=a.text):c=this.b("core.error.general");return'<html><body style="margin-top:40px; font-family:arial; background-color:#F4F8FD;"><center><table width="600px" style="font-size:11pt; color:#777; border:2px solid #E5F0FB; background-color:#ffffff; border-spacing:0px;"><tr><td align="center" style="background-color: #f0fff0; color: #FB9233; font-weight:bold; padding:5px; border-bottom:1px solid #E5F0FB;">EPUBReader</td></tr><tr><td style="padding:10px; direction:'+
this.b("lang.direction")+';">'+c+'</td></tr><tr><td style="padding:10px;">'+a+"</td></tr></table></body></html>"},b:function(a){return Components.classes["@mozilla.org/intl/stringbundle;1"].getService(Components.interfaces.nsIStringBundleService).createBundle("chrome://epubreader/locale/epubreader.properties").GetStringFromName(a)}},d="";try{if(a instanceof b.nsIHttpChannel){var l=a.QueryInterface(b.nsIChannel).QueryInterface(b.nsIHttpChannel),f=l.g,k=l.h;if(401==f||403==f){var g=[];g.code=this.d;
throw g;}if(404==f)throw g=[],g.code=this.e,g;if(400<=f)throw g=[],g.code=this.f,g.text="HTTP: "+f+", "+k,g;}var m=a.QueryInterface(b.nsIChannel).URI.spec;n["@mozilla.org/childprocessmessagemanager;1"].getService(b.nsIMessageSender).sendAsyncMessage("Epubreader:readEpub",{data:btoa(this.data),uri:m,openFrom:EpubreaderConverter.openFrom,currentUri:EpubreaderConverter.currentUri})}catch(p){d=c.get(p)}c=n["@mozilla.org/storagestream;1"].createInstance(b.nsIStorageStream);c.init(4,4294967295,null);l=
c.getOutputStream(0);f=n["@mozilla.org/binaryoutputstream;1"].createInstance(b.nsIBinaryOutputStream);f.setOutputStream(l);f.writeUtf8Z(d);f.close();d=c.newInputStream(4);try{this.c.onDataAvailable(this.a,h,d,0,c.length-4),this.c.onStopRequest(a,h,e)}catch(t){}}};var Prop={classID:Components.ID("{5384767E-00D9-40E9-B72F-9CC39D655D6F}"),classDescription:"EPUBReader Converter Component",contractID:"@mozilla.org/streamconv;1?from=application/epub+zip&to=*/*"},r=EpubreaderConverter.prototype,s=Prop,u;
for(u in s)r[u]=s[u];EpubreaderConverter.getMIMETypeFromContent=EpubreaderConverter.getMIMETypeFromContent;EpubreaderConverter.convert=EpubreaderConverter.convert;EpubreaderConverter.asyncConvertData=EpubreaderConverter.asyncConvertData;EpubreaderConverter.onDataAvailable=EpubreaderConverter.onDataAvailable;EpubreaderConverter.onStartRequest=EpubreaderConverter.onStartRequest;EpubreaderConverter.onStopRequest=EpubreaderConverter.onStopRequest;EpubreaderConverter.EXPORTED_SYMBOLS=EXPORTED_SYMBOLS;
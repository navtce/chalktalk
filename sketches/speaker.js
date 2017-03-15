function() {
   this.USES_DEPRECATED_PORT_SYSTEM = true;
   this.label = 'speaker';
   this.render = function() {
      var a = .3;
      mCurve([[1,-1],[-a,-a],[-1,-a],[-1,a],[-a,a],[1,1]]);
      mLine([1,1],[1,-1]);
      this.afterSketch(function() {
         if (typeof this.inValue_DEPRECATED_PORT_SYSTEM[0] == 'function')
            setAudioSignal(this.inValue_DEPRECATED_PORT_SYSTEM[0]);
         else
            setAudioSignal();
      });
   }
}
